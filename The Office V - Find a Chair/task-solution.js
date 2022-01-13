function meeting(x, need){
    if (need <= 0) return "Game On";
    let outRoomsChairs = [],
        leftNeedChair = need;
    for (let i = 0; i < x.length; i++){
      let freeChairs = x[i][1] >= x[i][0].length ? x[i][1] - x[i][0].length : 0;
      outRoomsChairs.push(leftNeedChair >= freeChairs ? freeChairs : leftNeedChair);
      leftNeedChair -= freeChairs;
      if (leftNeedChair <= 0) break; 
    }
    return leftNeedChair > 0 ? "Not enough!" : outRoomsChairs;
  }