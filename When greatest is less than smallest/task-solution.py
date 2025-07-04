from math import gcd as g
def greatest(x,y,n):
    l=x*y//g(x,y);return(n-1)//l*l
def smallest(x,y,n):
    l=x*y//g(x,y);return(n//l+1)*l