function generateShape(integer) {
  return new Array(integer).fill('+'.repeat(integer)).join('\n');
}
