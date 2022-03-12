function tops(msg) {
  let tops = '',
    iterator = 0;
  for (let i = 1; i < msg.length; i += iterator) {
    tops = msg[i] + tops;
    iterator = iterator ? iterator + 4 : 5;
  }
  return tops;
}
