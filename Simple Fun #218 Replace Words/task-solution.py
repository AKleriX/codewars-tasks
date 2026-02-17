def replace_words(sentence):
    words = sentence.split(" ")
    n = len(words)

    idx = sorted(range(n), key=lambda i: len(words[i]))

    for k in range(n // 2):
        a, b = idx[k], idx[n - 1 - k]
        words[a], words[b] = words[b], words[a]

    for i, w in enumerate(words):
        if len(w) == 1 and w.lower() == "i":
            words[i] = "I"
        elif i == 0:
            lw = w.lower()
            words[i] = lw[0].upper() + lw[1:]
        else:
            words[i] = w.lower()

    return " ".join(words)