const capital = (capitals) =>
  capitals.map(
    (data) => `The capital of ${data.state ? data.state : data.country} is ${data.capital}`,
  );
