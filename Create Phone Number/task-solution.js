function createPhoneNumber(numbers){
    return `(${numbers.join('').slice(0,3)}) ${numbers.join('').slice(3,6)}-${numbers.join('').slice(6)}`;
}
