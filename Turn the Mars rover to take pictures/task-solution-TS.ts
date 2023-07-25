type MoveDirection = 'left' | 'right';
type Direction = 'N' | 'S' | 'E' | 'W';

export const turn = (current: Direction, target: Direction): MoveDirection =>
  'NESWN'.includes(current + target) ? 'right' : 'left';
