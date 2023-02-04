const myParseInt = (str) => (/^\d+$/.test(str.trim()) ? Number(str.trim()) : NaN);
