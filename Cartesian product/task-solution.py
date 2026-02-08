def cart_prod(*sets):
    p = {()}
    for s in sets:
        next_p = set()
        for prefix in p:
            for el in s:
                next_p.add(prefix + (el,))
        p = next_p
    return p