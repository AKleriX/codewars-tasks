def hexdump(data):
    lines = []
    for i in range(0, len(data), 16):
        block = data[i:i+16]
        addr = f"{i:08x}"
        hexes = ' '.join(f"{b:02x}" for b in block)
        pad = ' ' * (47 - len(hexes))
        ascii_part = ''.join(chr(b) if 32 <= b <= 126 else '.' for b in block)
        lines.append(f"{addr}: {hexes}{pad}  {ascii_part}")
    return '\n'.join(lines)

def dehex(text):
    out = bytearray()
    for line in text.splitlines():
        if not line:
            continue
        hex_region = line[10:57]
        for t in hex_region.split():
            out.append(int(t, 16))
    return bytes(out)