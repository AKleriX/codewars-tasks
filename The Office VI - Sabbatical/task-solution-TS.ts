export function sabb(s: string, val: number, happiness: number): string {
  return val + happiness + s.replace(/[^sabticl]/g, '').length > 22
    ? 'Sabbatical! Boom!'
    : 'Back to your desk, boy.';
}
