def build_palindrome(s):
    n = len(s)
    for i in range(n):
        if s[i:] == s[i:][::-1]:
            a = s + s[:i][::-1]
            break
    for i in range(n, -1, -1):
        if s[:i] == s[:i][::-1]:
            b = s[i:][::-1] + s
            break
    return a if len(a) <= len(b) else b