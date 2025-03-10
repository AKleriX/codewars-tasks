const validatePersonalNumber = (personalNumber) =>
  /^(19[0-9]{2}|20(0[0-9]|1[0-6]))(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[-+]?\d{4}$/.test(
    personalNumber,
  );
