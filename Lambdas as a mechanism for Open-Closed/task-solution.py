spoken    = lambda s:(lambda t:t.capitalize()+'.')(s.strip(' .!').lower())
shouted   = lambda s:s.strip(' .!').upper()+'!'
whispered = lambda s:s.strip(' .!').lower()+'.'
greet     = lambda style,msg:style(msg)