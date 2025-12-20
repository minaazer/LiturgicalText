import json
import re
from pathlib import Path
from mishkal.tashkeel import TashkeelClass

# Optional back-up diacritizer (CAMeL). If not installed, we silently fall back to mishkal.
try:
    from camel_tools.diacritize import builtin_diacritizer

    camel_diacritizer = builtin_diacritizer()
except Exception:
    camel_diacritizer = None

t = TashkeelClass()
# Disable statistical mode to avoid mishkal's optional wordfrequency DB errors on some systems.
try:
    t.disable_stat_tashkeel()
except Exception:
    pass
# Prefer full context-aware analysis
try:
    t.enable_semantic_analysis()
    t.enable_syntaxic_analysis()
    t.disable_last_mark()
except Exception:
    pass

data = json.loads(Path("data/midnightPsalmody/seasonalPraises.json").read_text(encoding="utf-8"))

arabic_fields = 0
errors = []

ARABIC_DIACRITICS = ''.join([chr(code) for code in range(0x064B, 0x065F + 1)])


def has_diacritics(text: str) -> bool:
    """Return True if the text already contains Arabic diacritic marks."""
    return any(ch in ARABIC_DIACRITICS for ch in text)


def strip_diacritics(text: str) -> str:
    """Remove existing Arabic diacritics so we can re-tashkeel clean text."""
    return re.sub(f"[{re.escape(ARABIC_DIACRITICS)}]", "", text)


def diacritize_text_preserving_spaces(text: str) -> str:
    """
    Run mishkal on Arabic segments while keeping the exact whitespace from the
    source string. mishkal sometimes normalises spaces, so we split on
    whitespace, diacritize the word-like pieces only, then stitch the tokens
    back together unchanged.

    If camel_tools is available, we try it first; otherwise we fall back to mishkal.
    """
    tokens = re.split(r"(\s+)", text)
    result_tokens = []
    for token in tokens:
        # Leave pure whitespace untouched
        if not token or token.isspace():
            result_tokens.append(token)
            continue

        # Only diacritize if the token contains Arabic letters
        if re.search(r"[\u0600-\u06FF]", token):
            cleaned = strip_diacritics(token) if has_diacritics(token) else token
            try:
                if camel_diacritizer:
                    token = camel_diacritizer.diacritize(cleaned)
                else:
                    token = t.tashkeel(cleaned)
            except Exception as exc:
                # Fall back to the original token and record the error
                errors.append((token, str(exc)))
        result_tokens.append(token)

    return "".join(result_tokens)


def diacritize(obj, path=""):
    """Recursively tashkeel all `arabic` fields while counting progress."""
    global arabic_fields

    if isinstance(obj, dict):
        result = {}
        for k, v in obj.items():
            current_path = f"{path}.{k}" if path else k
            if k == "arabic" and isinstance(v, str):
                arabic_fields += 1
                try:
                    result[k] = diacritize_text_preserving_spaces(v)
                except Exception as exc:  # keep going even if a phrase fails
                    errors.append((current_path, str(exc)))
                    result[k] = v
            else:
                result[k] = diacritize(v, current_path)
        return result

    if isinstance(obj, list):
        return [diacritize(x, f"{path}[{i}]") for i, x in enumerate(obj)]

    return obj


new_data = diacritize(data)
Path("data/midnightPsalmody/seasonalPraises.diacritized.json").write_text(
    json.dumps(new_data, ensure_ascii=False, indent=2),
    encoding="utf-8",
)

print(f"Diacritization complete. Processed {arabic_fields} arabic fields.")
if errors:
    print(f"{len(errors)} entries failed to process (left untouched):")
    for location, msg in errors[:5]:
        print(f" - {location}: {msg}")
    if len(errors) > 5:
        print(" ...")
