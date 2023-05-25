function correctness(bobsDecisions, expertDecisions) {
  let counter = 0;
  for (let i = 0; i < bobsDecisions.length; i++)
    if (bobsDecisions[i] === expertDecisions[i]) counter++;
    else if (bobsDecisions[i] === '?' || expertDecisions[i] === '?') counter += 0.5;
  return counter;
}
