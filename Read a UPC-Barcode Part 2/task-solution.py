from preloaded import LEFT_HAND, RIGHT_HAND

def scanner(barcode):
    bits = ''.join('1' if c == '▍' else '0' for c in barcode)
    if bits[3:10].count('1') % 2 == 0:
        bits = bits[::-1]
    left = ''.join(str(LEFT_HAND[bits[3 + 7*i:3 + 7*(i+1)]]) for i in range(6))
    right = ''.join(str(RIGHT_HAND[bits[50 + 7*i:50 + 7*(i+1)]]) for i in range(6))
    code = left + right
    digits = list(map(int, code))
    m = (sum(digits[0:11:2]) * 3 + sum(digits[1:11:2])) % 10
    check = 0 if m == 0 else 10 - m
    if check != digits[-1]:
        return 'error'
    return f'{code[0]} {code[1:6]} {code[6:11]} {code[11]}'