def sequence(s):
    m={' ':'0','0':'00','1':'1','*':'*','#':'#'}
    for d,g in enumerate('ABC DEF GHI JKL MNO PQRS TUV WXYZ'.split(),2):
        k=str(d)
        m[k]=k*(len(g)+1)
        m.update({c:k*i for i,c in enumerate(g,1)})
    r=''
    for c in s.upper():
        t=m.get(c)
        if t:
            r+=('p' if r and r[-1]==t[0] else '')+t
    return r