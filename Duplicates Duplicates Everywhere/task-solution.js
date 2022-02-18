const removeDuplicateIds = (obj) => {
    let keys = Object.keys(obj).sort((a, b) => +b - +a),
        values = new Set(),
        newTable = {};
    for (let i = 0; i < keys.length; i++){
      let currentVal = obj[keys[i]].filter(v => {
        if (values.has(v)) return false;
        values.add(v);
        return true;
      });
      newTable[keys[i]] = currentVal;
    }
    return newTable;
  };