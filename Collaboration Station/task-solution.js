splitMessage = function (message, count) {
  if (count <= 0) return null;
  if (message === null) return Array.from({ length: count }, () => '');
  const result = Array.from({ length: count }, () => '');
  for (let i = 0; i < message.length; i++)
    for (let j = 0; j < count; j++) result[j] += i % count === j ? message[i] : '-';
  return result;
};
