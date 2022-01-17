const group = (arr) => {
    let lastNums = [];
    return arr.reduce((orgNums, num, _, nums) => {
      if (!lastNums.includes(num)){
        lastNums.push(num);
        orgNums.push(nums.filter(n => n === num));
      }
      return orgNums;
    }, []);                        
  }