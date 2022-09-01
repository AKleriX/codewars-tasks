String.prototype.delete = function (...args) {
  let currentStr = this + '';
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === 'string') currentStr = currentStr.replace(new RegExp(args[i], 'g'), '');
    else if (typeof args[i] === 'object' && args[i].constructor.name === 'RegExp')
      currentStr = currentStr.replace(args[i], '');
  }
  return currentStr;
};
