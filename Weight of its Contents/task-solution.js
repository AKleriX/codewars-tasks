/*
* Takes a bottleWeight and scale of the bottle to its contents
* and returns the weight of its contents
* @param {int} bottleWeight:
*  The weight of the entire bottle and contents
* @param {string} scale:
*  A string comparing the weight of the bottle contents to the weight of the bottle by itself
* Acceptable values: ('2 times larger', '4 times larger', '50 times smaller') 
*/
function contentWeight(bottleWeight, scale) {
  let scalePars = scale.split(' '),
    [v, m] = [+scalePars[0] + 1, scalePars[2] === 'larger' ? +scalePars[0] : 1];
  return (bottleWeight / v) * m;
}
