const getNote = (pitch) => {
  let n = null;
  for (let hz in notesDictionary) if (!(pitch % hz) || !(hz % pitch)) n = notesDictionary[hz];
  return n;
};
