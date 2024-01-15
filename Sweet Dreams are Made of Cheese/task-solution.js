const payCheese = (arr) => `£${Math.ceil(arr.reduce((s, w) => s + w / 100, 0)) * 8.75 * 4}`;
