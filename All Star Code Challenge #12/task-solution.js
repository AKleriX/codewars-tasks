const combineFriends = (array) =>
  array.reduce((o, f) => {
    let id = f.id;
    delete f.id;
    o[id] = f;
    return o;
  }, {});
