function check_arithmetic_Expression(x, y, z) {
  return x + y == z || x * y == z || x / y == z || x - y == z;
}
console.log(check_arithmetic_Expression(10, 30, 300))
console.log(check_arithmetic_Expression(10, 300, 30))
console.log(check_arithmetic_Expression(30, 300, 10))
console.log(check_arithmetic_Expression(30, 10, 300))
console.log(check_arithmetic_Expression(300, 10, 30))
console.log(check_arithmetic_Expression(300, 30, 10))