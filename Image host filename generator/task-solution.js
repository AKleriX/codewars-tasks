function generateName(){
    let name = '';
    for (let i = 0; i < 6; i++)
      name += getRandomLetter(); 
    return photoManager.nameExists(name) ? generateName() : name;
  }
  
  const getRandomLetter = () => {
    let letterUpperCase = !Math.floor(Math.random() * 2),
        letter = String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97);
    return letterUpperCase ? letter.toUpperCase() : letter;
  }