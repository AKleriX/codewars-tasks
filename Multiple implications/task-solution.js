const multImplication = (arr) => {
  if (!arr.length) return null;
  let currentState = arr[0];
  for (let i = 1; i < arr.length; i++)
    if (currentState && !arr[i]) currentState = false;
    else currentState = true;
  return currentState;
};
