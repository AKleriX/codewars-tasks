import pandas as pd

def max_common(a, b):
    r = a.copy()
    k = a.columns.intersection(b.columns)
    r[k] = a[k].clip(lower=b.reindex_like(a)[k])
    return r