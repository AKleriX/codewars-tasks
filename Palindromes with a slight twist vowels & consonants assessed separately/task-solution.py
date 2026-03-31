def palindrome(s):
    s=s.lower()
    v='aeiou'
    a=''.join(c for c in s if c.isalpha() and c in v)
    b=''.join(c for c in s if c.isalpha() and c not in v)
    return 'both' if a==a[::-1] and b==b[::-1] else 'vowel' if a==a[::-1] else 'consonant' if b==b[::-1] else 'neither'