from random import sample
def shuffled_deck():
    return sample([f'{s} {v}'for s in'HCDS'for v in range(1,14)],52)