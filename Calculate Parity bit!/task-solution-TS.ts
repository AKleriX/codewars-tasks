export function checkParity(parity: string, bin: string) {
  let oneBitsCounter: number = [...bin].filter((b: string): boolean => b === '1').length,
    modVal: number = parity === 'even' ? 1 : 0;
  return +(oneBitsCounter % 2 === modVal);
}
