const adviseBefore = (target, advice) => {
  return (...args) => {
    let adviceRes = advice(...args);
    return Array.isArray(adviceRes) ? target(...adviceRes) : target(...args);
  };
};
