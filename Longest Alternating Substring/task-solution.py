def longest_substring(s):
    i=j=k=0;p=-1
    for t,c in enumerate(s):
        q=ord(c)&1
        if q==p:
            if t-i>j-k:k,j=i,t
            i=t
        p=q
    if len(s)-i>j-k:k,j=i,len(s)
    return s[k:j]