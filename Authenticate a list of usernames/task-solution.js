const authList = (arr) => arr.every((n) => /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,10}$/.test(n));
