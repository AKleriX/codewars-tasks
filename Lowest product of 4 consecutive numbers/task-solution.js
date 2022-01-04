function lowestProduct(input) { 
    if (input.length < 4) return 'Number is too small';
    let minMul = 9**4;
    for (let i = 0; (i + 3) < input.length; i++)
      if ((Number(input[i]) * Number(input[i + 1]) * Number(input[i + 2]) * Number(input[i + 3])) < minMul)
        minMul = (Number(input[i]) * Number(input[i + 1]) * Number(input[i + 2]) * Number(input[i + 3]));
    return minMul;
  }