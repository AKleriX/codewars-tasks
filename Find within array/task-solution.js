const findInArray = (array, iterator) => {
    for (let i = 0; i < array.length; i++) 
      if (iterator(array[i], i)) return i;
    return -1;
  };