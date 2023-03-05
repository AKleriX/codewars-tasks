export function nerdify(txt: string): string {
  return txt.replace(/[ael]/gi, (l) =>
    /a/i.test(l) ? '4' : /e/i.test(l) ? '3' : /l/.test(l) ? '1' : l,
  );
}
