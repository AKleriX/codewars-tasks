function parityBit(binary) {
  let str = binary.split(' ');
  return str
    .map((bits) => {
      let parBit = bits[7],
        oneCount = bits.slice(0, 7).replace(/0/g, '').length;
      return (parBit === '0' && !(oneCount % 2)) || (parBit === '1' && oneCount % 2)
        ? bits.slice(0, 7)
        : 'error';
    })
    .join(' ');
}
