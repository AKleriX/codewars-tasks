export function checkCoupon(
  enteredCode: string,
  correctCode: string,
  currentDate: string,
  expirationDate: string,
): boolean {
  return (
    enteredCode === correctCode &&
    new Date(currentDate.replace(',', '')) <= new Date(expirationDate.replace(',', ''))
  );
}
