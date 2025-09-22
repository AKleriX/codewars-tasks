from operator import gt, lt, ge, le
_ops = {'>=': ge, '<=': le, '<>': lambda a,b: a!=b, '>': gt, '<': lt}
def _pred(c):
    if isinstance(c,(int,float)): return lambda x:x==c
    if isinstance(c,str):
        for k in ('>=','<=','<>','>','<'):
            if c.startswith(k):
                v=float(c[len(k):]); return lambda x:isinstance(x,(int,float)) and _ops[k](x,v)
        return lambda x:x==c
def count_if(values,criteria):
    f=_pred(criteria); return sum(map(f,values))
def sum_if(values,criteria):
    f=_pred(criteria); return sum(x for x in values if isinstance(x,(int,float)) and f(x))
def average_if(values,criteria):
    f=_pred(criteria); a=[x for x in values if isinstance(x,(int,float)) and f(x)]; return sum(a)/len(a)