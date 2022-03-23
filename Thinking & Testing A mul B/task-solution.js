const testIt = (a,b) => [...a.toString()].reduce(getReduceSum, 0) * [...b.toString()].reduce(getReduceSum, 0);

const getReduceSum = (sum, digit) => sum + Number(digit);