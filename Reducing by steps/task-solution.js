const gcdi = (x,y) => y ? gcdi(y, x % y) : Math.abs(x);

const lcmu = (a, b) => Math.abs(a * b) / gcdi(a, b);

const som = (a, b) => a + b;

const maxi = (a, b) => Math.max(a, b);

const mini = (a, b) => Math.min(a, b);


function operArray(fct, arr, init) {
    return arr.reduce((r, n, i) => {
      if (i === 0) r.push(fct(init, n))
      else r.push(fct(r[i - 1], n));
      return r;
    }, []);
}