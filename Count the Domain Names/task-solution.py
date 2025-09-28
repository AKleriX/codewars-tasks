def count_domains(domains, min_hits=0):
    from collections import Counter
    rows = domains.splitlines() if isinstance(domains, str) else domains
    tot = Counter()
    for r in rows:
        r = r.strip()
        if not r: 
            continue
        try:
            d, n = r.rsplit(None, 1)
        except ValueError:
            continue
        parts = d.lstrip('*.').split('.')
        if len(parts) < 2:
            continue
        base = '.'.join(parts[-3:]) if len(parts[-1]) == 2 and parts[-2] in {'co', 'com'} else '.'.join(parts[-2:])
        tot[base] += int(n)
    return '\n'.join(f'{k} ({v})' for k, v in sorted(tot.items(), key=lambda kv: (-kv[1], kv[0])) if v >= min_hits)