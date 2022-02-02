const rgb = (r, g, b) =>{
  return [r, g, b].map(c => {
    c = (c < 0 ? 0 : (c > 255 ? 255 : Math.round(c))).toString(16).toUpperCase();
    return c.length < 2 ? '0' + c : c;
    }).join('');
};