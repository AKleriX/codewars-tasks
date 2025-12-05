def chameleon(chameleons, desired_color):
    n = sum(chameleons)
    if sum(x > 0 for x in chameleons) == 1:
        return 0 if chameleons[desired_color] == n else -1
    c = chameleons[desired_color:] + chameleons[:desired_color]
    u, v = c[1], c[2]
    if (u - v) % 3:
        return -1
    k = (u - v) // 3
    z = max(0, k, -v - k)
    return v + 3 * z