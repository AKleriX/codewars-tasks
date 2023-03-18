const passTheDoorMan = (word) => (word.match(/(.)\1/)[1].charCodeAt() - 96) * 3;
