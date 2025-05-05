from collections import Counter

def is_isogram(word):
    if not isinstance(word, str) or not word.strip():
        return False
    letters = [c.lower() for c in word if c.isalpha()]
    counts = Counter(letters).values()
    return len(set(counts)) == 1