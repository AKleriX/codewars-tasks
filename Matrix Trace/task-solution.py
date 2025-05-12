def trace(matrix):
  if not matrix or any(len(row) != len(matrix) for row in matrix):
    return None
  return sum(matrix[i][i] for i in range(len(matrix)))