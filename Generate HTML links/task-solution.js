const generateMenu = (menuItems) =>
  menuItems.map((o) => `<a href="${o.url}">${o.text}</a>`).join('');
