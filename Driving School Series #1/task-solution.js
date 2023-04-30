const passed = (list) => {
  let passPoints = list.filter((p) => p <= 18);
  return passPoints.length
    ? Math.round(passPoints.reduce((s, p) => s + p, 0) / passPoints.length)
    : 'No pass scores registered.';
};
