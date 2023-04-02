function countSalutes(hallway) {
  let salCounter = 0,
    leftCounter = hallway.split('').filter((o) => o === '<').length;
  for (let i = 0; i < hallway.length; i++)
    if (hallway[i] === '<') leftCounter--;
    else if (hallway[i] === '>') salCounter += 2 * leftCounter;
  return salCounter;
}
