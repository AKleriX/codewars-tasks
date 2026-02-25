def octopus(idea: str) -> str:
    if idea is None or idea == "" or idea.strip(" ") == "":
        return ""

    result = []
    
    for i in range(0, len(idea), 8):
        chunk = idea[i:i + 8]
        used = {}

        for ch in chunk:
            if ch.isalpha():
                key = ch.lower()
                limit = 1
            elif ch.isdigit():
                key = ch 
                limit = 2
            else:
                key = ch
                limit = 1

            count = used.get(key, 0)
            if count < limit:
                result.append(ch)
                used[key] = count + 1
            else:
                result.append("*")

    return "".join(result)