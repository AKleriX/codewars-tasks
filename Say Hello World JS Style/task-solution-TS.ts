export function say(string1: string): (s: string) => string {
  return (string2) => `${string1} ${string2}`;
}
