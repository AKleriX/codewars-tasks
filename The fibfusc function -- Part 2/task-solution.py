def fibfusc(n, num_digits=None):
    M=10**num_digits if num_digits else 0
    if n==0: return ((1%M) if M else 1, 0)
    x,y=0,1
    for c in bin(n)[3:]:
        a,b=x,y; t=2*a+3*b
        x,y=((a+b)*(a-b), b*t) if c=='0' else (-b*t, (a+2*b)*(a+4*b))
        if M: x%=M; y%=M
    if M:
        x%=M; y%=M
        return (x-M if n>1 and x else x, y)
    return (x,y)