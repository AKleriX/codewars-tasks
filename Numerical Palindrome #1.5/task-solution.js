function palindrome(num,s) { 
    let pals = [];
    if (parseInt(num) !== num || parseInt(s) !== s || num < 0) return 'Not valid';
    while (pals.length < s){
      if (num.toString() === [...num.toString()].reverse().join('') && num > 10)
        pals.push(num);
      num++;
    }
    return pals;
  }