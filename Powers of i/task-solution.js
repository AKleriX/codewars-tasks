const pofi = (n) => (n % 2 ? (Math.floor(n / 2) % 2 ? '-i' : 'i') : (n / 2) % 2 ? '-1' : '1');
