def create_phone_number(n):
    return "(" + "".join(map(str, n[0:3])) + ") " + "".join(map(str, n[3:6])) + "-" + "".join(map(str, n[6:]))