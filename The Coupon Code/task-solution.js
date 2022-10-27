const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
  return (
    enteredCode === correctCode &&
    new Date(currentDate.replace(',', '')) <= new Date(expirationDate.replace(',', ''))
  );
};
