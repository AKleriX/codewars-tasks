const countHorses = (sound) => {
  let soundArr = sound.split('').map(Number),
    output = [],
    stepSize = 1;

  while (soundArr.some((num) => num > 0)) {
    let thumpsInStep = soundArr.filter((_, index) => (index + 1) % stepSize === 0);

    if (!thumpsInStep.includes(0)) {
      for (let i = stepSize - 1; i < soundArr.length; i += stepSize) soundArr[i] -= 1;
      output.push(stepSize);
    } else stepSize += 1;
  }

  return output;
};
