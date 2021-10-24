function encrypt(text, n) {
    if (!text) return text;
    for (let i = 0; i < n; i++){
        text = text.split('');
        let even = '', odd = ''
        for (let j = 0; j < text.length; j += 2){
            even += text[j];
            odd += text[j + 1] ? text[j + 1] : '';
        }
        text = odd + even;
    }
    return text;
}

function decrypt(encryptedText, n) {
    if (!encryptedText) return encryptedText;
    for (let i = 0; i < n; i++){
        let even = encryptedText.slice(Math.trunc(encryptedText.length / 2)),
            odd = encryptedText.slice(0, Math.trunc(encryptedText.length / 2));
        encryptedText = '';
        for (let j = 0; j < even.length; j++){
            encryptedText += even[j];
            encryptedText += odd[j] ? odd[j] : '';
        }
    }
    return encryptedText;
}