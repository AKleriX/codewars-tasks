export function Mormons(startingNumber:number, reach:number, target:number):number{
  let currentNumber: number = startingNumber,
      missionCounter: number = 0;
  while (currentNumber < target){
    currentNumber += currentNumber * reach;
    missionCounter++;
  }
  return missionCounter;
}