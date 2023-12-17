// -------------------- #1 Fibonacci ----------------------
function fibonacci(n, tabs = "  ") {
  // console.log(`${tabs}fibonacci(${n})`);
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    const a = fibonacci(n - 1, tabs + "  ");
    const b = fibonacci(n - 2, tabs + "  ");
    return a + b;
  }
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
