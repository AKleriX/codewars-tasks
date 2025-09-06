def unpack(l):
    """Unpack a list of elements that contains unpackable objects.
    
    >>> unpack([None, [1, ({2, 3}, {'foo': 'bar'})]])
    [None, 1, 2, 3, 'foo', 'bar']
    
    """
    r,s=[],[l]
    while s:
        x=s.pop()
        if isinstance(x,(list,tuple,set)): s.extend(x)
        elif isinstance(x,dict): s.extend(x.items())
        else: r.append(x)
    return r