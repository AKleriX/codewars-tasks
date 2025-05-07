class HighScoreTable:
    
    def __init__(self, limit):
        self.limit = limit
        self.scores = []

    def update(self, score):
        self.scores.append(score)
        self.scores.sort(reverse=True)
        self.scores = self.scores[:self.limit]

    def reset(self):
        self.scores = []