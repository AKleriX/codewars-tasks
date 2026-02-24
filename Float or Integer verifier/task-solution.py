import re

def i_or_f(s: str) -> bool:
    num_re = re.compile(r'^[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?$')
    return num_re.fullmatch(s) is not None