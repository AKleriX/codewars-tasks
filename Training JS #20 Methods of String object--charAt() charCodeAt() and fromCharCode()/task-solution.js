function topSecret(str) {
  let realStr = [...str]
    .map((s) => {
      let newS = s;
      if (/[a-z]/i.test(newS)) {
        let code = newS.charCodeAt() - (newS.charCodeAt() > 96 ? 96 : 64) - 3;
        newS = String.fromCharCode(
          (code > 0 ? code : 26 + code) + (newS.charCodeAt() > 96 ? 96 : 64),
        );
      }
      return newS;
    })
    .join('');
  return realStr;
}

//question1: The top secret file number is...
answer1 = '2312';
//question2: Super agent's name is...
answer2 = 'hBfiQr';
//question3: He stole the treasure is...
answer3 = 'Barbie doll';
