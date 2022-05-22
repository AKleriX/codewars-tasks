const shortener = function (message) {
  let currentMessage = '' + message;
  while (currentMessage.length > 160 && /\s+/g.test(currentMessage))
    currentMessage = currentMessage.replace(
      /(\s+[^\s])([^\s]*$)/,
      (_, p1, p2) => p1[1].toUpperCase() + p2,
    );
  return currentMessage;
};
