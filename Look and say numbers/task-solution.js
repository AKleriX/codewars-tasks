function lookAndSay(data,len){
    let rows = [],
        lastRow = '' + data;  
    for (let i = 0; i < len; i++){
      rows.push(lastRow.replace(/(.)\1*/g, (match) => match.length + match[0]));
      lastRow = rows[i];
    }
    return rows;
  }