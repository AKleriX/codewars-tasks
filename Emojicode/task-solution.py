def to_emojicode(emojis):
    return ' '.join('️⃣'.join(str(ord(c)))+'️⃣' for c in emojis)

def to_emojis(emojicode):
    return ''.join(chr(int(x.replace('️⃣',''))) for x in emojicode.split())
