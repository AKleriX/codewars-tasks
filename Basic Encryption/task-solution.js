function encrypt(text, rule) {
    return text.split('').map(l => String.fromCharCode((l.charCodeAt() + rule) % 256)).join('');
  };