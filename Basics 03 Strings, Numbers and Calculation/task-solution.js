function calculateString(st){
    let clearStr = st.replace(/[^0-9.*/+-]/g, ''),
        nums = clearStr.split(/\+|-|\*|\//).map(Number),
        operator = clearStr.match(/\+|-|\*|\//)[0];
    switch(operator){
        case '+':
          return Math.round(nums[0] + nums[1]).toString();
        case '-': 
          return Math.round(nums[0] - nums[1]).toString();
        case '*': 
          return Math.round(nums[0] * nums[1]).toString();
        case '/': 
          return Math.round(nums[0] / nums[1]).toString();
        default:
          return 'Wrong input!'
    }
  }