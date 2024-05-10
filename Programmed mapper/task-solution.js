const mapEmUp = (input, mappers) =>
  input.map((v) => {
    let f = mappers.filter((el) => el[0](v));
    return f.length ? f[0][1](v) : -1;
  });
