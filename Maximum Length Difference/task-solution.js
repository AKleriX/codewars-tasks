const mxdiflg = (a1, a2) => {  
  if (!a1.length || !a2.length) return -1;
  let maxDif = 0,
      a1Sort = [...a1].sort((a, b) => a.length - b.length),      
      a2Sort = [...a2].sort((a, b) => a.length - b.length);
  return Math.max(Math.abs(a1Sort[0].length - a2Sort[0].length), Math.abs(a1Sort[0].length - a2Sort[a2Sort.length - 1].length),
                 Math.abs(a1Sort[a1Sort.length - 1].length - a2Sort[0].length), 
                  Math.abs(a1Sort[a1Sort.length - 1].length - a2Sort[a2Sort.length - 1].length));
}