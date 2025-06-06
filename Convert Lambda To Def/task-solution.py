def convert_lambda_to_def(string):
    name, rest = string.split('=', 1)
    name = name.strip()
    rest = rest.strip()[len('lambda '):]
    params, expr = rest.split(':', 1)
    params = params.strip()
    expr = expr.strip()
    return f"def {name}({params}):\n    return {expr}"