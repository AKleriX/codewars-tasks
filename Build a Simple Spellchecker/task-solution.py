def correct_spelling(text, word_list):
    import re
    
    words_in_text = re.findall(r"[a-zA-Z](?:[a-zA-Z]|[^a-zA-Z\s])*[a-zA-Z]|[a-zA-Z]", text)
    word_set = {w.lower() for w in word_list}
    
    def edits1(word):
        w = word.lower()
        letters = 'abcdefghijklmnopqrstuvwxyz\'-'
        splits = [(w[:i], w[i:]) for i in range(len(w) + 1)]
        deletes = [L + R[1:] for L, R in splits if R]
        transposes = [L + R[1] + R[0] + R[2:] for L, R in splits if len(R) > 1]
        replaces = [L + c + R[1:] for L, R in splits if R for c in letters]
        inserts = [L + c + R for L, R in splits for c in letters]
        return set(deletes + transposes + replaces + inserts)
    
    def apply_case(misspelled, correction):
        if len(misspelled) == 1:
            if misspelled[0].isupper():
                return correction[0].upper() + correction[1:]
            else:
                return correction
        
        if all(c.isupper() for c in misspelled if c.isalpha()):
            return correction.upper()
        
        result = []
        for i, c in enumerate(correction):
            if i < len(misspelled) and misspelled[i].lower() == c.lower():
                result.append(misspelled[i])
            else:
                result.append(c)
        return ''.join(result)
    
    result = {}
    for word in words_in_text:
        if word.lower() not in word_set:
            candidates = edits1(word) & word_set
            candidates.discard(word.lower())
            
            if not candidates:
                candidates = {e2 for e1 in edits1(word) for e2 in edits1(e1)} & word_set
                candidates.discard(word.lower())
            
            corrections = sorted({apply_case(word, c) for c in candidates})
            
            if word not in result:
                result[word] = corrections
    
    return result