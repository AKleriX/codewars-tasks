const romajiDictLow = "aeiou";
const romajiDictUp  = "AEIOU";
const hiraDict      = "あえいおう";
const kataDict      = "アエイオウ";

function vowels(input, output){
  let res = '';
  switch(output){
      case 'hiragana':
        res = input.replace(new RegExp('[' + romajiDictLow + ']', 'g'), r => hiraDict[romajiDictLow.indexOf(r)]);
        res = res.replace(new RegExp('[' + romajiDictUp + ']', 'g'), r => hiraDict[romajiDictUp.indexOf(r)]);
        res = res.replace(new RegExp('[' + kataDict + ']', 'g'), r => hiraDict[kataDict.indexOf(r)]);
        break;
      case 'katakana':
        res = input.replace(new RegExp('[' + romajiDictLow + ']', 'g'), r => kataDict[romajiDictLow.indexOf(r)]);
        res = res.replace(new RegExp('[' + romajiDictUp + ']', 'g'), r => kataDict[romajiDictUp.indexOf(r)]);
        res = res.replace(new RegExp('[' + hiraDict + ']', 'g'), r => kataDict[hiraDict.indexOf(r)]);
        break;
      default:
        res = input.replace(new RegExp('[' + kataDict + ']', 'g'), r => romajiDictLow[kataDict.indexOf(r)]);
        res = res.replace(new RegExp('[' + hiraDict + ']', 'g'), r => romajiDictLow[hiraDict.indexOf(r)]);
        break;
  }
  return res;
};