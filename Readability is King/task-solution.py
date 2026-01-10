import re

def flesch_kincaid(text):
    words_counter = 0
    syl_counter = 0
    snt = re.split("[.!?] ", text)
    for s in snt:
        words = s.split(" ")
        words_counter += len(words)
        for w in words:
            syl_counter += len(re.findall("[aeuio]+", w, flags = re.IGNORECASE))
    return round((0.39 * (words_counter / len(snt))) + (11.8 * (syl_counter / words_counter)) - 15.59, 2)