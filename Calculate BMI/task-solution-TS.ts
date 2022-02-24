export function bmi(weight: number, height: number): string {
  let bmi: number = weight / height**2;
  return bmi <= 18.5 ? 'Underweight' : (bmi <= 25 ? 'Normal' : (bmi <= 30 ? 'Overweight' : 'Obese'));
}