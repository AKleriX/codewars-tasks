def args_to_string(args):
    result = []
    for arg in args:
        if isinstance(arg, list):
            if len(arg) == 2:
                key, value = arg
                prefix = "--" if len(key) > 1 else "-"
                result.append(f"{prefix}{key} {value}")
            else:
                result.append(arg[0])
        else:
            result.append(arg)
    return ' '.join(result)