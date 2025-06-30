def solve(n,b):
 import itertools as I
 i=s=0
 for x in(y for r in I.count(1)for y in[*range(1,r+1),*range(r-1,0,-1)]):
  if x==b:return s
  if i and i%n==0:s+=x
  i+=1