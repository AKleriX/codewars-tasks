const convertBits = (a, b) => [...(a ^ b).toString(2)].filter((b) => b === '1').length;
