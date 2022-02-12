//Extend the String object with toBase64() and fromBase64() functions

String.prototype.base64Abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

String.prototype.toBase64 = function(){
  let bits = this.split('').map(s => {
    let code = s.charCodeAt().toString(2);
    return code.length < 8 ? '0'.repeat(8 - code.length) + code : code;
  }).join(''),
      base64Code = '';
  for (let i = 0; i < bits.length; i += 6){
    base64Code += this.base64Abc[parseInt(bits.slice(i, i + 6).length < 6 ? 
                                          bits.slice(i, i + 6) + '0'.repeat(6 - bits.slice(i, i + 6).length) : 
                                          bits.slice(i, i + 6), 2)];    
   }
  return base64Code;
};

String.prototype.fromBase64 = function(){
  let bits = this.split('').map(s => {
    let code = this.base64Abc.indexOf(s).toString(2);
    return code.length < 6 ? '0'.repeat(6 - code.length) + code : code;
  }).join(''),
      realText = '';
  for (let i = 0; i < bits.length - 7; i += 8){
    realText += String.fromCharCode(parseInt(bits.slice(i, i + 8), 2));    
  }
  return realText;
};