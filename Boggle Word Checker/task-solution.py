def find_word(b,w):
    def f(r,c,i,v):
        if i==len(w):return 1
        if not(0<=r<len(b)and 0<=c<len(b[0]))or(r,c)in v or b[r][c]!=w[i]:return 0
        v|={(r,c)};x=any(f(r+d,c+e,i+1,v)for d in[-1,0,1]for e in[-1,0,1]if d|e);v-={(r,c)}
        return x
    return any(f(r,c,0,set())for r in range(len(b))for c in range(len(b[0])))