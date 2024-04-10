const longestMountainPass = (mountains, E) => {
  let maxLength = 1,
    maxIdx = 0,
    start = 0,
    end = 1,
    energy = E,
    enAdded = [],
    length = 1;
  while (end < mountains.length) {
    let energyReq = Math.max(mountains[end] - mountains[end - 1], 0);
    if (end === start) energyReq = 0;
    if (energyReq <= energy) {
      energy -= energyReq;
      length++;
      if (length > maxLength) {
        maxLength = length;
        maxIdx = start;
      }
      enAdded.push(energyReq);
      end++;
    } else {
      if (start === end) {
        start++;
        end++;
        length = 1;
      } else {
        start++;
        if (enAdded.length) energy += enAdded.shift();
        length--;
      }
    }
  }
  return mountains.length ? [maxLength, maxIdx ? maxIdx : 0] : [0, 0];
};
