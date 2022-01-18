const stray = (numbers) => {
    let nums = new Set(numbers.slice(1));
    return nums.size === 1 ? numbers[0] : Array.from(nums).find(n => n !== numbers[0]);
  }