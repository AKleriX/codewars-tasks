def get_member_since(username):
    import re, urllib.request as u, urllib.parse as p
    m=re.search(r'Member Since.*?([A-Z][a-z]{2})[a-z]*\s+(\d{4})',u.urlopen(u.Request('https://www.codewars.com/users/'+p.quote(username,safe=''),headers={'User-Agent':'Mozilla/5.0'})).read().decode(),re.S);return f'{m[1]} {m[2]}'