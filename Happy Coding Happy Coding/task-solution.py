import re

def happy_coding(nickname):
    happy = re.search(r'\bhappy\b', nickname, flags=re.IGNORECASE)
    coding = re.search(r'\bcoding\b', nickname, flags=re.IGNORECASE)

    if happy and coding:
        return 1 if happy.start() < coding.start() else 2
    if coding:
        return 3
    if happy:
        return 4
    return 5