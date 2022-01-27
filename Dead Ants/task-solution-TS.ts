export function deadAntCount (ants:string | null) : number {
  let diedAnts: string[] | null = ants ? ants.replace(/(ant)|([^a-z])/g,'').split('').sort().join('').match(/(.)\1*/g) : [];
  return diedAnts ? diedAnts.reduce((maxBits: number, bits: string): number => bits.length > maxBits ? bits.length : maxBits, 0) : 0;
}