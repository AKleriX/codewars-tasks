from decimal import Decimal as D

def abacus(a: list[list[int]]) -> D:
    return sum((D('0.01')*(10**i)*(r+[0]).index(0) for i, r in enumerate(a)), D(0))