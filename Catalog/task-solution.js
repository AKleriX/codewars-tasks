function catalog(s, article) {
    let productsBase = s.split('\n\n').filter(row => {
      let name = row.slice(12, row.indexOf('</name>'));
      return name.indexOf(article) > -1;
    }).map(row => {
      return `${row.slice(12, row.indexOf('</name>'))} > prx: \$${row.slice(row.indexOf('<prx>') + 5, row.indexOf('</prx>'))} qty: ${row.slice(row.indexOf('<qty>') + 5, row.indexOf('</qty>'))}`
    }).join('\r\n');
    return productsBase.length > 0 ? productsBase : 'Nothing';
  }