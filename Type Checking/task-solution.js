function type(val) {
  let currentType = (typeof val)[0].toUpperCase() + (typeof val).slice(1);
  if (val === null) currentType = 'Null';
  else if (currentType === 'Number') {
    if (Math.abs(val) === Infinity) currentType += ' Infinite';
    else if (isNaN(val)) currentType += ' NaN';
    else if (!(val % 1)) currentType += ' Integer';
    else currentType += ' Float';
  } else if (currentType === 'String' && !isNaN(+val)) currentType += ' Numeric';
  else if (currentType === 'Object') currentType = val.constructor.name;
  return currentType;
}
