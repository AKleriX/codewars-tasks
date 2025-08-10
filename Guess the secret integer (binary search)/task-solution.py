def find_secret_number(low, high, guess_bot):
    l,r=low,high
    while 1:
        m=(l+r)//2
        s=guess_bot.guess_number(m)
        if s=='Correct': return m
        l,r=(m+1,r) if s=='Larger' else (l,m-1)