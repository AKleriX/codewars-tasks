def time_stamp(times):
    y, m, d, h, mm, s = times
    y -= 1 if m <= 2 else 0    
    era = y // 400
    yoe = y - era * 400
    mp = m + 9 if m <= 2 else m - 3
    doy = (153 * mp + 2) // 5 + (d - 1)
    doe = yoe * 365 + yoe // 4 - yoe // 100 + doy
    return (era * 146097 + doe - 719468) * 86400 + h * 3600 + mm * 60 + s