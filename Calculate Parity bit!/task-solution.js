function checkParity(parity, bin) {
  let oneBitsCounter = [...bin].filter((b) => b === '1').length,
    modVal = parity === 'even' ? 0 : 1;
  return oneBitsCounter % 2 === modVal ? 0 : 1;
}
