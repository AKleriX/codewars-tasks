def flatten(dictionary):
    res = {}

    def dfs(d, path=''):
        for k, v in d.items():
            key = f'{path}/{k}' if path else k
            if isinstance(v, dict):
                if v:
                    dfs(v, key)
                else:
                    res[key] = ''
            else:
                res[key] = v

    dfs(dictionary)
    return res