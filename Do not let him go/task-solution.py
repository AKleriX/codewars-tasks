from typing import List, Tuple

def locate_entrance(office: List[str]) -> Tuple[int, int]:
    h=len(office); S={'#','.'}
    for y,r in enumerate(office):
        for x,c in enumerate(r):
            if c=='.' and any(not(0<=ny<h and 0<=nx<len(office[ny]) and office[ny][nx] in S) for nx,ny in ((x-1,y),(x+1,y),(x,y-1),(x,y+1))):
                return x,y