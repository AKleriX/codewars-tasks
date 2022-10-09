const mygcd = (a, b) => (b ? mygcd(b, a % b) : a);
