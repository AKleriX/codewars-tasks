def convert(n,f,t):
 a='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';x=0
 for c in n:x=x*f+a.find(c)
 r=''
 while x:r=a[x%t]+r;x//=t
 return r or'0'