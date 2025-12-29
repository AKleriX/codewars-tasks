import re

def calculate(input):
    if not isinstance(input, str) or not input.strip():
        return False
    
    expr = input.replace(' ', '')
    
    if not expr or not all(c in '0123456789+-*/.' for c in expr):
        return False
    
    expr = re.sub(r'\b0+(\d+)', r'\1', expr)
    expr = re.sub(r'\b0+(?=\.|\b)', '0', expr)
    
    try:
        result = eval(expr, {'__builtins__': {}})
        if result != result:
            return False
        int(result)
        return int(result) if result == int(result) else result
    except:
        return False