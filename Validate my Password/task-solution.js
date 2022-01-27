function validPass(password){
    let passLength = password.length,
        letters = password.match(/[a-z]/gi),
        nums = password.match(/[0-9]/g);
    return passLength > 3 && passLength < 20 && letters && nums && letters.length + nums.length === passLength ? 'VALID' : 'INVALID';
  }