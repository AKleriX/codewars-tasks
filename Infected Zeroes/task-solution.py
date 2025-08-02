def infected_zeroes(lst):
    s=''.join(map(str,lst)).split('0')
    return max((len(t)+1)//2 if 0<i<len(s)-1 else len(t) for i,t in enumerate(s))