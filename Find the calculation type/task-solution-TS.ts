export function calcType(a: number, b: number, res: number): string {
  let type: string = '';
  switch (res) {
    case a + b:
      type = 'addition';
      break;
    case a - b:
      type = 'subtraction';
      break;
    case a * b:
      type = 'multiplication';
      break;
    default:
      type = 'division';
      break;
  }
  return type;
}
