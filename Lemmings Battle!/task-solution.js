const lemmingBattle = (battlefield, green, blue) => {
  const greenArmy = green.slice().sort((a, b) => b - a),
    blueArmy = blue.slice().sort((a, b) => b - a);

  while (greenArmy.length > 0 && blueArmy.length > 0) {
    const battles = Math.min(battlefield, greenArmy.length, blueArmy.length),
      greenSurvivors = [],
      blueSurvivors = [];

    for (let i = 0; i < battles; i++) {
      const greenPower = greenArmy.shift(),
        bluePower = blueArmy.shift();

      if (greenPower > bluePower) greenSurvivors.push(greenPower - bluePower);
      else if (bluePower > greenPower) blueSurvivors.push(bluePower - greenPower);
    }

    greenArmy.push(...greenSurvivors);
    blueArmy.push(...blueSurvivors);

    greenArmy.sort((a, b) => b - a);
    blueArmy.sort((a, b) => b - a);
  }

  if (greenArmy.length === 0 && blueArmy.length === 0) return 'Green and Blue died';
  else if (greenArmy.length > 0) return `Green wins: ${greenArmy.join(' ')}`;
  else return `Blue wins: ${blueArmy.join(' ')}`;
};
