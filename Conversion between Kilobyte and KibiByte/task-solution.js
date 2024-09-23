const memorysizeConversion = (memorysize) => {
  const convert = {
      TB: (v) => `${(v * 0.9094947).toFixed(3)} TiB`,
      GB: (v) => `${(v * 0.9313226).toFixed(3)} GiB`,
      MB: (v) => `${(v * 0.9536743).toFixed(3)} MiB`,
      kB: (v) => `${(v * 0.9765625).toFixed(3)} KiB`,
      KiB: (v) => `${(v * 1.024).toFixed(3)} kB`,
      MiB: (v) => `${(v * 1.048576).toFixed(3)} MB`,
      GiB: (v) => `${(v * 1.0737418).toFixed(3)} GB`,
      TiB: (v) => `${(v * 1.0995116).toFixed(3)} TB`,
    },
    [valueStr, unit] = memorysize.split(' '),
    value = parseFloat(valueStr);

  return convert[unit](value).replace(/(\.\d*?)0+(?!\d)/, '$1');
};
