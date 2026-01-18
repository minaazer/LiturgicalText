import os
import shutil
import subprocess
import numpy as np
import noisereduce as nr
import soundfile as sf
from pathlib import Path

# ====== SET THESE ======
INPUT_MP3 = r"input.mp3"          # <-- put your file path here
OUTPUT_MP3 = r"enhanced.mp3"      # <-- output file path
# =======================

def run(cmd):
    subprocess.run(cmd, check=True)

def apply_eq_blocked(y, sr, block_size=65536, hop=None):
    """Apply gentle EQ in blocks to avoid huge FFT memory usage."""
    hop = hop or block_size // 2
    window = np.hanning(block_size).astype(np.float64)
    win_sq = window * window

    freqs = np.fft.rfftfreq(block_size, 1 / sr)
    hp = 1 / (1 + (120 / np.maximum(freqs, 1e-9)) ** 4)
    center = 2500.0
    width = 1800.0
    presence = 1.0 + 0.25 * np.exp(-0.5 * ((freqs - center) / width) ** 2)
    shape = hp * presence

    out = np.zeros(len(y) + block_size, dtype=np.float64)
    norm = np.zeros(len(y) + block_size, dtype=np.float64)

    for start in range(0, len(y), hop):
        block = y[start:start + block_size]
        if len(block) < block_size:
            block = np.pad(block, (0, block_size - len(block)))
        block = block.astype(np.float64)
        spec = np.fft.rfft(block * window)
        spec *= shape
        blk_shaped = np.fft.irfft(spec)
        blk_shaped *= window
        out[start:start + block_size] += blk_shaped
        norm[start:start + block_size] += win_sq

    norm[:len(y)][norm[:len(y)] < 1e-8] = 1.0
    return (out[:len(y)] / norm[:len(y)]).astype(np.float32)

def main():
    # Resolve ffmpeg location early so we fail with a clear message if missing
    ffmpeg_env = os.environ.get("FFMPEG_BIN")
    ffmpeg = (
        ffmpeg_env
        or shutil.which("ffmpeg")
        or shutil.which("ffmpeg.exe")
        or r"C:\Program Files (x86)\MiniTool Video Converter\FFmpeg\ffmpeg.exe"  # known local install
    )
    if not ffmpeg or not Path(ffmpeg).exists():
        raise RuntimeError(
            "ffmpeg not found. Install it (e.g., winget install Gyan.FFmpeg) "
            "or set FFMPEG_BIN to the full path of ffmpeg.exe."
        )
    ffmpeg = str(Path(ffmpeg))

    # Resolve input path: env override -> constant -> prompt user
    candidate = os.environ.get("INPUT_MP3") or INPUT_MP3
    inp = Path(candidate)
    if not inp.exists():
        prompt = "Enter path to input MP3: "
        user = input(prompt).strip().strip('"').strip("'")
        inp = Path(user)
        if not inp.exists():
            raise FileNotFoundError(f"Input file not found: {inp}")

    # Derive a default output name beside input if the default was not changed
    out_override = os.environ.get("OUTPUT_MP3")
    if out_override:
        out = Path(out_override)
    else:
        if OUTPUT_MP3 == "enhanced.mp3":
            out = inp.with_name(inp.stem + "_enhanced.mp3")
        else:
            out = Path(OUTPUT_MP3)

    wav_in = inp.with_suffix(".tmp_in.wav")
    wav_out = inp.with_suffix(".tmp_out.wav")

    # 1) Decode MP3 -> WAV (mono, 48k)
    run([
        ffmpeg, "-y",
        "-i", str(inp),
        "-ac", "1",
        "-ar", "48000",
        "-vn",
        str(wav_in)
    ])

    # 2) Load wav
    y, sr = sf.read(str(wav_in))
    if y.ndim > 1:
        y = y[:, 0]

    # 3) Pick a "noise profile" from the quietest 0.75 seconds (safe for lectures)
    win = int(0.75 * sr)
    if len(y) < win * 2:
        raise RuntimeError("Audio too short for this script setup.")

    # sliding RMS to find quiet region
    # (simple + fast)
    y2 = y.astype(np.float64)
    cumsum = np.cumsum(np.insert(y2 * y2, 0, 0))
    rms = np.sqrt((cumsum[win:] - cumsum[:-win]) / win)
    start = int(np.argmin(rms))
    noise_clip = y[start:start + win]

    # 4) Noise reduction (gentle to preserve Arabic consonants)
    y_denoised = nr.reduce_noise(
        y=y,
        sr=sr,
        y_noise=noise_clip,
        prop_decrease=0.85,      # gentle/medium
        stationary=False
    )

    # 5) Voice clarity EQ-ish shaping (done in frequency domain, mild)
    #    - high-pass effect by reducing sub-120Hz energy
    #    - presence boost around 2.5kHz (speech intelligibility)
    #    Done in blocks to avoid huge FFT on long files.
    y_shaped = apply_eq_blocked(y_denoised, sr, block_size=65536, hop=32768)

    # 6) Normalize safely (avoid clipping)
    peak = np.max(np.abs(y_shaped)) + 1e-12
    target = 0.98
    y_final = (y_shaped * (target / peak)).astype(np.float32)

    # 7) Save WAV -> encode to MP3
    sf.write(str(wav_out), y_final, sr)

    run([
        ffmpeg, "-y",
        "-i", str(wav_out),
        "-c:a", "libmp3lame",
        "-b:a", "192k",
        str(out)
    ])

    # Cleanup
    try:
        wav_in.unlink(missing_ok=True)
        wav_out.unlink(missing_ok=True)
    except Exception:
        pass

    print(f"Done! Enhanced file saved to: {out}")

if __name__ == "__main__":
    main()
