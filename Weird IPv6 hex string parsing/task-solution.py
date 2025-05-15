def parse_IPv6(iPv6):
    import re
    blocks = re.split(r'[^0-9A-Fa-f]+', iPv6)
    result = ''
    for block in blocks:
        total = sum(int(ch, 16) for ch in block)
        result += str(total)
    return result