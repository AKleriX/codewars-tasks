export function toBase64(str: string): string {
  // Encode this string to Base64
  const base64Abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  
   let bits: string = str.split('').map(s => {
                let code = s.charCodeAt(0).toString(2);
                return code.length < 8 ? '0'.repeat(8 - code.length) + code : code;
              }).join(''),
      base64Code: string = '';
  for (let i = 0; i < bits.length; i += 6){
    base64Code += base64Abc[parseInt(bits.slice(i, i + 6).length < 6 ? 
                                          bits.slice(i, i + 6) + '0'.repeat(6 - bits.slice(i, i + 6).length) : 
                                          bits.slice(i, i + 6), 2)];    
   }
  return base64Code;  
}

export function fromBase64(str: string): string {
  // Decode this string from Base64
  const base64Abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  
  let bits: string = str.split('').map(s => {
              let code = base64Abc.indexOf(s).toString(2);
              return code.length < 6 ? '0'.repeat(6 - code.length) + code : code;
             }).join(''),
      realText: string = '';
  for (let i = 0; i < bits.length - 7; i += 8){
    realText += String.fromCharCode(parseInt(bits.slice(i, i + 8), 2));    
  }
  return realText;
}
