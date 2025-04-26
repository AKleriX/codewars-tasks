class DefaultList:
  def __init__(self, initial_list, default_value):
    self.data = list(initial_list)
    self.default = default_value

  def __getitem__(self, index):
    if -len(self.data) <= index < len(self.data):
      return self.data[index]
    return self.default

  def __setitem__(self, index, value):
    if index >= len(self.data):
      self.data.extend([self.default] * (index - len(self.data) + 1))
    elif index < -len(self.data):
      self.data = [self.default] * (-index - len(self.data)) + self.data
      index = 0
    self.data[index] = value

  def extend(self, iterable):
    self.data.extend(iterable)

  def append(self, item):
    self.data.append(item)

  def insert(self, index, item):
    self.data.insert(index, item)

  def remove(self, item):
    self.data.remove(item)

  def pop(self, index=-1):
    return self.data.pop(index)

  def __repr__(self):
    return repr(self.data)