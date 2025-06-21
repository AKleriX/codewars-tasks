from string import ascii_uppercase as U,ascii_lowercase as L,digits as D
def make_password(length,flag_upper,flag_lower,flag_digit):
 s=flag_upper*U[0]+flag_lower*L[0]+flag_digit*D[0]
 for c in flag_upper*U+flag_lower*L+flag_digit*D:
  if len(s)<length and c not in s:s+=c
 return s