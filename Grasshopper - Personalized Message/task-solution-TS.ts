export const greet = (name: string, owner: string): string => `Hello ${name === owner ? 'boss' : 'guest'}`;