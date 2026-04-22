def solve(str1,str2):
    return 1 if any(str1.count(c)>1 for c in set(str1)-set(str2)) else 2