def morse_converter(strng):
    digits = '1234567890'
    morse_codes = [
        '.----', '..---', '...--', '....-', '.....',
        '-....', '--...', '---..', '----.', '-----'
    ]
    morse_map = {code: digit for code, digit in zip(morse_codes, digits)}
    return int(''.join(morse_map[strng[i:i+5]] for i in range(0, len(strng), 5)))