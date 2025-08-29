def put_the_cat_on_the_table(cat, room):
    r,c=cat
    if not(0<=r<len(room) and 0<=c<len(room[0])): return "NoCat"
    t=next(((i,j) for i,a in enumerate(room) for j,b in enumerate(a) if b),None)
    return "NoTable" if not t else "D"*max(t[0]-r,0)+"U"*max(r-t[0],0)+"R"*max(t[1]-c,0)+"L"*max(c-t[1],0)