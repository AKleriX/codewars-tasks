export const josephus = (items: any[], k: number): any[] => {
  let resArr: any[] = [],
      circle: any[] = [...items],
      currentIndex: number = 0;
  while (circle.length){
    currentIndex = (currentIndex + k - 1) % circle.length;
    resArr.push(circle.splice(currentIndex, 1)[0]);
  }
  return resArr;
}