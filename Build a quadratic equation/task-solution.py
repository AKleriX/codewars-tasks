def quadratic_builder(e):
    import re
    v=re.search('[a-z]',e).group()
    a,b,c,d=re.findall(r'\(([-+]?\d*)'+v+r'([+-]\d+)\)\(([-+]?\d*)'+v+r'([+-]\d+)\)',e)[0]
    g=lambda t:int(t+'1') if t in('','+','-') else int(t)
    m,n,p,q=g(a),int(b),g(c),int(d)
    A,B,C=m*p,m*q+n*p,n*q
    s=(''if A==1 else'-'if A==-1 else str(A))+v+'^2'
    if B:s+=('+'if B>0 else'-')+(''if abs(B)==1 else str(abs(B)))+v
    if C:s+=('+'if C>0 else'-')+str(abs(C))
    return s