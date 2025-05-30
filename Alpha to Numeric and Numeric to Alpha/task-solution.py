def AlphaNum_NumAlpha(string):
    result = []
    i = 0
    while i < len(string):
        if string[i].isdigit():
            j = i
            while j < len(string) and string[j].isdigit():
                j += 1
            num = int(string[i:j])          
            result.append(alphabet[num-1])    
            i = j
        else:
            result.append(alphabetnums[string[i]])
            i += 1
    return ''.join(result)