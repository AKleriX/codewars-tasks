def deaf_grandma(you):
    return [("OK, BYE!" if s=="BYE" else ("NO, NOT SINCE 1938!" if s.isupper() else "HUH?! SPEAK UP, SONNY!")) for s in you[:you.index("BYE")+1]]