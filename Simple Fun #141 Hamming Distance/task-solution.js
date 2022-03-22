const hammingDistance = (a, b) => (a ^ b).toString(2).replace(/0/g, '').length;
