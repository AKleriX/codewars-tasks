def bang_contain_string(s,history):
    for line in history.splitlines()[::-1]:
        parts = line.split(None, 1)
        if len(parts) > 1 and s in parts[1]:
            return parts[1].strip()
    return f'!{s}: event not found'