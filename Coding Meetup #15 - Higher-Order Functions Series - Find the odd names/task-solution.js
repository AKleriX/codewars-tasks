const findOddNames = (list) => {
    return list.filter(devData => devData.firstName.split('').reduce((codesSum, letter) => codesSum + letter.charCodeAt(), 0) % 2);
  };