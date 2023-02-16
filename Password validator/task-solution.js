const password = (str) => /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d).{8,}$/.test(str);
