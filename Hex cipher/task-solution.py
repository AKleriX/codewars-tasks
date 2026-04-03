from preloaded import TEXT2HEX

HEX2TEXT = {v: k for k, v in TEXT2HEX.items()}

class HexCipher:
    @classmethod
    def encode(cls, s, n):
        for _ in range(n):
            s = ''.join(TEXT2HEX[c] for c in s)
        return s
    
    @classmethod
    def decode(cls, s, n):
        for _ in range(n):
            s = ''.join(HEX2TEXT[s[i:i+2]] for i in range(0, len(s), 2))
        return s