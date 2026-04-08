import re

def break_caesar(message):
    words = set(WORDS)
    def decode(n):
        return ''.join(chr((ord(c.lower()) - 97 - n) % 26 + 97) if c.isalpha() else c for c in message)
    return max(range(26), key=lambda n: sum(w in words for w in re.findall(r'[a-z]+', decode(n))))