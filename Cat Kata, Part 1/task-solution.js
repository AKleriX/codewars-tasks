function peacefulYard(yard, minDistance) {
    let catsPos = [],
        distants = [],
        cats = 'LMR';
    for(let i = 0; i < yard.length; i++) {
      let catFind = '';
      for (let cat of cats){
        if (yard[i].indexOf(cat) !== -1) {  
          catFind += cat;
          catsPos.push([i, yard[i].indexOf(cat)]);      
        }      
      }
      cats = cats.replace(catFind, '');
      if (!cats.length) break;
    }
    for (let j = 0; j < catsPos.length; j++)
      for (let k = j + 1; k < catsPos.length; k++)
        distants.push(distant(catsPos[j], catsPos[k]));
    return !distants.length || Math.min.apply(null, distants) >= minDistance;
  }
    
  const distant = ([x1, y1], [x2, y2]) => Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);