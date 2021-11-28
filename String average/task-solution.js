function averageString(str) {
    const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let numsSum = str.split(' ').reduce((sum, num) => {
        if (nums.indexOf(num) === -1 || sum == null) return null;
        return sum + nums.indexOf(num);
    },0);
    if (numsSum == null || str.length ===  0) return 'n/a';
    return nums[Math.trunc(numsSum/str.trim().split(' ').length)];
}