const abacaba = (k) => String.fromCharCode(((k - 1) ^ k).toString(2).length + 96);
