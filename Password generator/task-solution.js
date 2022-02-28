function passwordGen(){
  let password = '',
      length = getRandomInt(6, 20);
  while (password.length < length){
    if (!(password.length % 3)) password += String.fromCharCode(getRandomInt(48, 57));
    else if (!(password.length % 2)) password += String.fromCharCode(getRandomInt(97, 122));
    else password += String.fromCharCode(getRandomInt(65, 90));
  }
  return password;
}

const getRandomInt = (min, max) => Math.round(Math.random() * (max - min) + min);