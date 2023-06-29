const whoTookTheCarKey = (message) =>
  message.reduce((m, c) => m + String.fromCharCode(parseInt(c, 2)), '');
