function findNextPower(val, pow_) {
  let counter = 0;
  while (counter ** pow_ <= val) counter++;
  return counter ** pow_;
}
