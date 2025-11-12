from preloaded import EXPERIENCE, ROCKS

class Miner:
    def __init__(self, xp=0):
        self.xp = float(xp)
        self.level = self._calc_level()
    
    def _calc_level(self):
        return min(max(l for l, v in EXPERIENCE.items() if v <= self.xp), 40)
    
    def mine(self, rock):
        required, gained = ROCKS[rock]
        if self.level < required:
            return f"You need a mining level of {required} to mine {rock}."
        before = self.level
        self.xp += gained
        self.level = self._calc_level()
        if self.level > before:
            return f"Congratulations, you just advanced a Mining level! Your mining level is now {self.level}."
        return "You swing your pick at the rock."