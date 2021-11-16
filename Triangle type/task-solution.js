/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a, b, c){
    let alpha = Math.acos((a**2+c**2-b**2)/(2*a*c)) * 180/Math.PI,
        beta = Math.acos((a**2+b**2-c**2)/(2*a*b)) * 180/Math.PI,
        gamma = Math.acos((b**2+c**2-a**2)/(2*c*b)) * 180/Math.PI;
    if (alpha === 180 || beta === 180 || gamma === 180 || (!(a < b+c) || !(b < a+c) || !(c < a+b)))
        return 0;
    if (alpha < 90 && beta < 90 && gamma < 90)
        return 1;
    if (alpha === 90 || beta === 90 || gamma === 90)
        return 2;
    return 3;
}