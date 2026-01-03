import argparse
import io
import sys
import zipfile
from pathlib import Path

from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes


KEY = b"BF0CD490B522DB71"
IV = b"4F754474483D7CA9"


def decrypt_bytes(data: bytes) -> bytes:
    cipher = Cipher(algorithms.AES(KEY), modes.CBC(IV), backend=default_backend())
    decryptor = cipher.decryptor()
    return decryptor.update(data) + decryptor.finalize()


def decrypt_file(src: Path) -> bytes:
    return decrypt_bytes(src.read_bytes())


def write_output(base_output: Path, rel_path: Path, name: str, data: bytes) -> Path:
    target_dir = base_output / rel_path.parent
    target_dir.mkdir(parents=True, exist_ok=True)
    target_file = target_dir / name
    target_file.write_bytes(data)
    return target_file


def process_file(src: Path, input_root: Path, output_root: Path) -> None:
    rel = src.relative_to(input_root)
    decrypted = decrypt_file(src)

    # If decrypted payload is a ZIP (most .cr files are encrypted ZIPs containing XML)
    if decrypted.startswith(b"PK"):
        with zipfile.ZipFile(io.BytesIO(decrypted)) as zf:
            for member in zf.infolist():
                payload = zf.read(member)
                # Prefer .xml extension for readability
                out_name = Path(member.filename).with_suffix(".xml").name
                out_path = write_output(output_root, rel, out_name, payload)
                print(f"Decrypted {src} -> {out_path}")
    else:
        out_name = src.with_suffix(".xml").name
        out_path = write_output(output_root, rel, out_name, decrypted)
        print(f"Decrypted {src} -> {out_path}")


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser(description="Decrypt .cr files to plain XML.")
    parser.add_argument(
        "--input-folder",
        required=True,
        help="Folder containing encrypted .cr files (recursively processed).",
    )
    parser.add_argument(
        "--output-folder",
        required=True,
        help="Folder to write decrypted XML files.",
    )
    args = parser.parse_args(argv)

    input_root = Path(args.input_folder).resolve()
    output_root = Path(args.output_folder).resolve()

    if not input_root.exists():
        print(f"Input folder not found: {input_root}", file=sys.stderr)
        return 1

    files = list(input_root.rglob("*.cr"))
    if not files:
        print(f"No .cr files found under {input_root}", file=sys.stderr)
        return 1

    for src in files:
        process_file(src, input_root, output_root)

    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
