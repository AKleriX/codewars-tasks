function sort(items) {
  if (items.length === 1) return items;
  let sortItems = [],
    sort1 = sort(items.slice(0, Math.round(items.length / 2))),
    sort2 = sort(items.slice(Math.round(items.length / 2)));
  while (sort1.length && sort2.length) {
    if (sort1[0] < sort2[0]) sortItems.push(sort1.shift());
    else sortItems.push(sort2.shift());
  }
  if (sort1.length) sortItems = sortItems.concat(sort1);
  else if (sort2.length) sortItems = sortItems.concat(sort2);
  return sortItems;
}
