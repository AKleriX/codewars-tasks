def get_k(a, b):
    k = (abs(a - b) - (a % abs(a  - b))) % abs(a - b)
    return k if k else abs(a - b)