function one_two_three() {
    let oneOrTwo1 = one_two(),
        oneOrTwo2 = one_two();
    return oneOrTwo1 === 1 && oneOrTwo2 === 1 ? 1 : 
            (oneOrTwo1 === 1 && oneOrTwo2 === 2 ? 2 : 
            (oneOrTwo1 === 2 && oneOrTwo2 === 1 ? 3 : 
             one_two_three()));
  }