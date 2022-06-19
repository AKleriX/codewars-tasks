function toTable(data, headers = false, index = false) {
  let counter = 1,
    html = '';
  for (let i = 0; i < data.length; i++) {
    html +=
      headers && !i
        ? '<thead><tr>'
        : (headers && i === 1) || (!headers && !i)
        ? '<tbody><tr>'
        : '<tr>';
    for (let j = 0; j < data[i].length; j++) {
      let strData = data[i][j] === null ? '' : data[i][j].toString();
      html +=
        headers && !i
          ? !j && index
            ? '<th>' + '</th>' + '<th>' + strData + '</th>'
            : '<th>' + strData + '</th>'
          : index && !j
          ? '<td>' + counter++ + '</td>' + '<td>' + strData + '</td>'
          : '<td>' + strData + '</td>';
    }
    html += headers && !i ? '</tr></thead>' : i === data.length - 1 ? '</tr></tbody>' : '</tr>';
  }
  return '<table>' + html + '</table>';
}
