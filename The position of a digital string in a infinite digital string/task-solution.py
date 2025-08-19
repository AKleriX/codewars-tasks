def find_position(s):
    def F(n):
        if n<=0:return 0
        d=1;p=1;r=0
        while p*10<=n:r+=9*p*d;p*=10;d+=1
        return r+(n-p+1)*d
    def C(s,m,p):
        if m<1:return
        L=s[:p];R=s[p:];x='';k=m
        while len(x)<len(R):x+=str(k);k+=1
        if not x.startswith(R):return
        y='';k=m-1
        while len(y)<len(L):
            if k<1:return
            y=str(k)+y;k-=1
        if not y.endswith(L):return
        return F(m-1)-len(L)
    def W(m):
        a=max(1,m-1);b=m+15;c=''.join(str(i) for i in range(a,b+1));q=c.find(s)
        return None if q<0 else F(a-1)+q
    b=None;n=len(s)
    for p in range(n+1):
        L=s[:p];R=s[p:]
        if R:
            if R[0]!='0':
                for k in range(1,len(R)+1):
                    m=int(R[:k])
                    for t in (C(s,m,p),W(m)):
                        if t is not None and (b is None or t<b):b=t
                base=int(R)
                for t in range(1,16-len(R)):
                    M=10**t;z=min(p,t);r=(int(L[-z:])+1)%(10**z) if z else 0
                    m=base*M+r
                    for t2 in (C(s,m,p),W(m)):
                        if t2 is not None and (b is None or t2<b):b=t2
            else:
                for k in range(1,len(R)+1):
                    m=10**k
                    for t in (C(s,m,p),W(m)):
                        if t is not None and (b is None or t<b):b=t
        else:
            for z in range(1,min(15,len(L))+1):
                r=(int(L[-z:])+1)%(10**z);m=max(1,r or 10**z)
                for t in (C(s,m,p),W(m)):
                    if t is not None and (b is None or t<b):b=t
    return b if b is not None else -1