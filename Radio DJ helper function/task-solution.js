const longestPossible = (playback) => {
  let currentMaxLength = [false, 0];
  for (let i = 0; i < songs.length; i++) {
    let songLengts = getSeconds(songs[i].playback);
    if (songLengts <= playback && songLengts > currentMaxLength[1])
      [currentMaxLength[0], currentMaxLength[1]] = [songs[i].title, songLengts];
  }
  return currentMaxLength[0];
};

const getSeconds = (s) => s.split(':').reduce((sec, v, i) => (!i ? +v * 60 : sec + +v), 0);
