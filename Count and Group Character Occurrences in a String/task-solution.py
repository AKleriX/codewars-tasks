from collections import Counter

def get_char_count(strng: str) -> dict[int, list[str]]:
    cnt = Counter(ch.lower() for ch in strng if ch.isalnum())
    inv: dict[int, list[str]] = {}
    for ch, n in cnt.items():
        inv.setdefault(n, []).append(ch)
    for n in inv:
        inv[n].sort()
    return dict(sorted(inv.items(), key=lambda x: -x[0]))