def spin_words(sentence: str) -> str:
    return " ".join(word[::-1] if len(word) > 4 else word for word in sentence.split())