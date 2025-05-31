def gradient(c1, c2):
    def interp(p):
        r = (c1[0] * (100 - p) + c2[0] * p) // 100
        g = (c1[1] * (100 - p) + c2[1] * p) // 100
        b = (c1[2] * (100 - p) + c2[2] * p) // 100
        return (r, g, b)
    return interp