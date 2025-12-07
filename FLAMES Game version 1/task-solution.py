def show_relationship(male, female):
    a = male.replace(" ", "").lower()
    b = female.replace(" ", "").lower()
    common = set(a) & set(b)
    n = sum(c not in common for c in a + b)
    letter = "FLAMES"[(n - 1) % 6]
    return {
        "F": "Friendship",
        "L": "Love",
        "A": "Affection",
        "M": "Marriage",
        "E": "Enemies",
        "S": "Siblings"
    }[letter]