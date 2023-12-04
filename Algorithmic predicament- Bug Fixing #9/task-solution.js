function highestAge(group1, group2) {
  let highestName = { name: '', age: -1 },
    newGroup = [],
    combGroup = group1.concat(group2);

  for (let i = 0; i < combGroup.length; i++)
    if (newGroup.indexOfProp('name', combGroup[i].name) === -1) newGroup.push(combGroup[i]);
    else newGroup[newGroup.indexOfProp('name', combGroup[i].name)].age += combGroup[i].age;

  newGroup.sort((p, c) => p.name.localeCompare(c.name));

  for (let i = 0; i < newGroup.length; i++)
    if (newGroup[i].age > highestName.age) highestName = newGroup[i];

  return highestName.name;
}

Array.prototype.indexOfProp = function (prop, value) {
  for (let i = 0; i < this.length; i++) if (this[i][prop] == value) return i;
  return -1;
};
