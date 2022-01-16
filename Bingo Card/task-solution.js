function getCard() {
    let card = [],
        [min, max] = [-14, 0];
    for (let l of 'BINGO'){
      let colLength = l === 'N' ? 4 : 5,
          col = [];
      [min, max] = [min + 15, max + 15];    
      for (let i = 1; i <= colLength; i++){ 
        let position = `${l}${getRandomInt(min, max)}`;
        while (col.includes(position))
          position = `${l}${getRandomInt(min, max)}`;
        col.push(position);
      }
      card = card.concat(col);
    }
    return card;
  }
  
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;