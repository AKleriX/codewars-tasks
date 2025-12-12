class Datamining:
    def __init__(self, train_set):
        n = len(train_set)
        sum_x = sum(x for x, y in train_set)
        sum_y = sum(y for x, y in train_set)
        sum_xx = sum(x * x for x, y in train_set)
        sum_xy = sum(x * y for x, y in train_set)
        
        self.a = (n * sum_xy - sum_x * sum_y) / (n * sum_xx - sum_x * sum_x)
        self.b = (sum_y - self.a * sum_x) / n
    
    def predict(self, x):
        return self.a * x + self.b