def joker_card(joker_nums, ticket_serials):
    j=''.join(str(x)[-1] for x in joker_nums)
    L=['Losing card','V type','IV type','III type','II type','I type']
    return [next((L[k-1] for k in range(6,1,-1) if str(t).zfill(6).endswith(j[-k:])),L[0]) for t in ticket_serials]