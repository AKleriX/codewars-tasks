const formatDataValue = (data) => {
  let d = data.toString().padStart(9, '0'),
    mb = +d.slice(6) + 'MB',
    gb = +d.slice(3, 6) + 'GB',
    tb = +d.slice(0, 3) + 'TB';
  return [tb, gb, mb].filter((d) => d[0] !== '0').join(' ') || '0MB';
};
