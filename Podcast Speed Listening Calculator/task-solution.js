const speedListen = (audioLength, playSpeed) => getTime((getSec(audioLength) / playSpeed) | 0);

const getSec = (time) =>
  time.split(':').reduce((s, t, i) => s + (!i ? +t * 3600 : i === 1 ? +t * 60 : +t), 0);

const getTime = (sec) =>
  `${('0' + ((sec / 3600) | 0)).slice(-2)}:${('0' + (((sec % 3600) / 60) | 0)).slice(-2)}:${(
    '0' +
    ((sec % 3600) % 60)
  ).slice(-2)}`;
