def answer(question, information):
    q = set(question.lower().split()); f = lambda s: len(q & set(s.lower().split())); best = max(information, key=f)
    return best if f(best) else None