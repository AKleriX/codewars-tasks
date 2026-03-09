def duplicate_encode(word):
    word = word.lower()
    return ''.join('(' if word.count(c) == 1 else ')' for c in word)