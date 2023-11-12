const encode = (str) => [...str].map((s) => String.fromCharCode(s.charCodeAt() * 6)).join('');

const decode = (str) => [...str].map((s) => String.fromCharCode(s.charCodeAt() / 6)).join('');
