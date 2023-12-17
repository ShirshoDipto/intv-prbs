// --------------- #1 a to the power b ------------------
function power(a, b) {
  if (b === 0) return 1;
  if (a === 0) return 0;
  return a * power(a, b - 1);
}

console.log(power(3, 0));
console.log(power(0, 3));
console.log(power(0, 0));
