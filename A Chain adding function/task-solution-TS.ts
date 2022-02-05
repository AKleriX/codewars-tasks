export default function add(x: number): any {
    let sum: number = x;
    const addNum = (num: number) => {
      sum += num;
      return addNum;
    }
    addNum.valueOf = () => sum;
    return addNum;
  }