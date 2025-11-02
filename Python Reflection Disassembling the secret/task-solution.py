def find_the_secret(f):
  for string in f.__code__.co_consts:
    if isinstance(string, str) and len(string) == 32:
      return string