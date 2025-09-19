def read_barcode(barcode):
    b=''.join('01'[c=='▍'] for c in barcode); i=b.find('101')
    L=[LEFT_HAND[b[x:x+7]] for x in range(i+3,i+45,7)]
    R=[RIGHT_HAND[b[x:x+7]] for x in range(i+50,i+92,7)]
    return f"{L[0]} {''.join(map(str,L[1:]))} {''.join(map(str,R[:-1]))} {R[-1]}"