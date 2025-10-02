def ordering_beers(beers):
    if not isinstance(beers, int) or beers < 0 or beers > 99: raise ValueError('out of range')
    u = ["zero","jeden","dwa","trzy","cztery","piec","szesc","siedem","osiem","dziewiec"]
    teen = ["dziesiec","jedenascie","dwanascie","trzynascie","czternascie","pietnascie","szesnascie","siedemnascie","osiemnascie","dziewietnascie"]
    tens = ["","dziesiec","dwadziescia","trzydziesci","czterdziesci","piecdziesiat","szescdziesiat","siedemdziesiat","osiemdziesiat","dziewiecdziesiat"]
    if beers == 0: return "Woda mineralna poprosze"
    if beers == 1: return "Jedno piwo poprosze"
    if beers < 10: w = u[beers]
    elif beers < 20: w = teen[beers - 10]
    else: w = tens[beers // 10] + (f" {u[beers % 10]}" if beers % 10 else "")
    form = "piwa" if beers % 10 in (2, 3, 4) and not 12 <= beers % 100 <= 14 else "piw"
    return f"{w.capitalize()} {form} poprosze"