def detect_brute_force(logs):
    ips = {}
    res = set()
    for log in logs:
        ip, e, _user = log.split()
        if e == "LOGIN_FAIL":
            ips[ip] = ips.get(ip, 0) + 1
            if ips[ip] == 3:
                res.add(ip)
        else:
            ips[ip] = 0
    return sorted(res)