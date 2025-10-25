def abbr(state):
    t="alabAL alasAK ariAZ arkAR caCA colCO conCT deDE fFL geGA hHI idID ilIL inIN ioIA"+" kaKS keKY lLA maiME marMD masMA micMI minMN missiMS missoMO moMT nebNE nevNV ne"+"whNH newjNJ newmNM newyNY northcNC northdND ohOH okOK orOR pePA rRI southcSC sou"+"thdSD tenTN texTX utUT veVT viVA waWA weWV wiWI wyWY diDC amAS guGU northeMP puP"+"R usVI"
    s=''.join(c.lower() for c in state if c.isalpha())
    return next(w[-2:] for w in t.split() if s.startswith(w[:-2]))