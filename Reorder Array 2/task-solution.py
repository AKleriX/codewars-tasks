import numpy as n
def reorder(a,b):return n.roll(n.arange(a).reshape(2,-1),b,1).tolist()