def bit_letter(n):
    return''.join((' '*(p==1))+c+(',.'[p-2] if p>1 else '')for x in n for p,c in[(x>>6,chr((x&31)+97-32*(x>>5&1)))])