const sillycase = (silly) =>
  silly.slice(0, Math.ceil(silly.length / 2)).toLowerCase() +
  silly.slice(Math.ceil(silly.length / 2)).toUpperCase();
