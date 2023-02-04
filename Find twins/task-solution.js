const elimination = (arr) => arr.find((n, i, a) => i !== a.indexOf(n)) || null;
