const largest = (n, xs) => (n ? [...xs].sort((a, b) => a - b).slice(-n) : []);
