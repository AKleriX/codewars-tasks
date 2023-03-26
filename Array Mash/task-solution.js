const arrayMash = (array1, array2) => array1.reduce((a, el, i) => [...a, el, array2[i]], []);
