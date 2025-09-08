def ascii_cipher(message, key):
    n=abs(key);p=0;d=2
    while d*d<=n:
        if n%d:d+=1
        else:p=d;n//=d
    if n>1:p=n
    if key<0:p=-p
    return ''.join(chr((ord(c)+p)&127) for c in message)