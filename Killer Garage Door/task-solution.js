function door(events) {
  let counter = 0,
    pointerMove = 0,
    lastPointer = 1,
    currentTimes = '';
  for (let i = 0; i < events.length; i++) {
    if (events[i] === 'P')
      if (pointerMove === 0) {
        if (counter === 5) [pointerMove, lastPointer] = [-1, pointerMove];
        else if (counter === 0) [pointerMove, lastPointer] = [1, pointerMove];
        else [pointerMove, lastPointer] = [lastPointer, pointerMove];
      } else [pointerMove, lastPointer] = [0, pointerMove];
    else if (events[i] === 'O') [pointerMove, lastPointer] = [pointerMove * -1, pointerMove];
    if (pointerMove === 1)
      if (counter === 5) pointerMove = 0;
      else counter++;
    else if (pointerMove === -1)
      if (counter === 0) pointerMove = 0;
      else counter--;
    currentTimes += counter;
  }
  return currentTimes;
}
