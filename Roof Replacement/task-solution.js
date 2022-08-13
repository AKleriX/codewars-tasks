function roofFix(f, r) {
  for (let i = 0; i < r.length; i++) if (/[/\\]/.test(r[i]) && /\S/.test(f[i])) return false;
  return true;
}
