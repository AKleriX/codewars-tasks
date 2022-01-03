function parseHTMLColor(color) {  
    let colorsParse = color[0] === '#' ? color.slice(1) : PRESET_COLORS[color.toLowerCase()].slice(1);
    if (colorsParse.length === 3) colorsParse = colorsParse.split('').map(n => n + n);
    else colorsParse = colorsParse.match(/(.{1,2})/g);
    return {r: parseInt(colorsParse[0], 16), g: parseInt(colorsParse[1], 16), b: parseInt(colorsParse[2], 16)};
  }