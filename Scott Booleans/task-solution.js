const False = (f) => (t) => f;

const True = (f) => (t) => t;

const iff = (fn) => (f) => (t) => fn(t)(f);
