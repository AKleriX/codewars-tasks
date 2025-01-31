const parseOrder = (order) => {
  const parts = order.match(/(\d+)([a-z])/g) || [];
  let fruits = {};
  parts.forEach((p) => {
    let [_, count, fruit] = p.match(/(\d+)([a-z])/);
    fruits[fruit] = parseInt(count, 10);
  });
  return fruits;
};

const formatFruit = (count, fruit) => {
  let pallets = Math.floor(count / 50),
    boxes = Math.floor((count % 50) / 10),
    bags = count % 10,
    result = '';
  result += '[a]'.replace('a', fruit).repeat(pallets);
  result += '{a}'.replace('a', fruit).repeat(boxes);
  if (bags > 0) result += `(a)`.replace('a', fruit.repeat(bags));
  return result;
};

const fruitPack = (orders) => {
  let formattedOrders = orders.map((order) => {
    let fruits = parseOrder(order),
      formatted = Object.keys(fruits).map((fruit) => formatFruit(fruits[fruit], fruit));
    return formatted.join('');
  });
  return formattedOrders.map((order) => arrangeShelf(order));
};

const arrangeShelf = (order) => {
  let tier1 = [],
    tier2 = [],
    tier3 = [],
    bags = order.match(/\([^)]*\)/g) || [],
    boxes = order.match(/\{[^}]*\}/g) || [],
    pallets = order.match(/\[[^\]]*\]/g) || [];

  tier1.push(...bags);
  tier2.push(...boxes);
  tier3.push(...pallets);

  let maxLen = Math.max(tier1.join('').length, tier2.join('').length, tier3.join('').length),
    pad = (arr) => arr.join('').padStart(maxLen, '-');

  return [pad(tier1), pad(tier2), pad(tier3)];
};
