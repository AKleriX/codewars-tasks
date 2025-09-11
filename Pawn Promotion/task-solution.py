def promotion(board):
    f=lambda s:next(((i,j) for i,r in enumerate(board) for j,c in enumerate(r) if c==s),None)
    p,k=f('P'),f('K')
    if not p or not k:return []
    dr,dc=abs(p[0]-k[0]),abs(p[1]-k[1])
    return ['queen']*(dr==dc or dr*dc==0)+['rook']*(dr*dc==0)+['bishop']*(dr==dc)+['knight']*((dr,dc) in {(1,2),(2,1)})