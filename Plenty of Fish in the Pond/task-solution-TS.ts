export function fish(shoal: String): Number{
    let sortShoal: string[] = [...shoal].sort((a, b) => Number(a) - Number(b)),
        currentSize = 1,
        countFish = 0;
    for (let i = 0; i < sortShoal.length; i++){
      if (currentSize < Number(sortShoal[i])) break;
      countFish += Number(sortShoal[i]);
      if (currentSize * 4 <= countFish) {      
        countFish = countFish - currentSize * 4;
        currentSize++;   
      }
    }
    return currentSize;
  }