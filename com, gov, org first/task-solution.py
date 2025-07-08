def order_by_domain(a):
    p={'com':0,'gov':1,'org':2}
    return sorted(a,key=lambda u:((0,p[t]) if (t:=(h:=u.split('//')[-1].split('/')[0]).rsplit('.',1)[-1]) in p else (1,t),h))