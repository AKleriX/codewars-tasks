export function inviteMoreWomen(L: number[]): boolean {
  return L.reduce((s, g) => s + g) > 0;
}
