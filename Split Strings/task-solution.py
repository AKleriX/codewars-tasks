import re

def solution(s):
    return re.findall(r"..", s + "_")    