//first solution 
function sortString(string,ordering) {
    let currectOrder = {},
        sortStr = ''; 
    for (let i = 0; i < ordering.length; i++)
      currectOrder[ordering[i]] = '';
    for (let i = 0; i < string.length; i++)
      if (!currectOrder.hasOwnProperty(string[i]))
        currectOrder['other'] = currectOrder.hasOwnProperty('other') ? currectOrder['other'] + string[i] : string[i];
      else currectOrder[string[i]] += string[i];
    for (let symbol in currectOrder)
      sortStr += currectOrder[symbol]; 
    return sortStr;
  }

// better solution

function sortString(string,ordering) {
    return [...new Set(ordering)].map(o => [...string].filter(s => s === o).join('')).
           concat([...string].filter(s => !ordering.includes(s)).join('')).join('');
  }