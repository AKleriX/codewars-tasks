def letters_to_numbers(s):
    counter = 0
    for ch in s:
        code = ord(ch)
        if 91 > code > 64 :
            counter += (code - 64) * 2
        elif 123 > code > 96:
            counter += code - 96
        elif 58 > code > 47:
            counter += code - 48
    return counter