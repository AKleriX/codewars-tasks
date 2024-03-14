const switchLights = (a) => {
  const c = [...a];
  for (let i = 0; i < c.length; i++) if (c[i]) for (let j = 0; j <= i; j++) c[j] = +!c[j];
  return c;
};
