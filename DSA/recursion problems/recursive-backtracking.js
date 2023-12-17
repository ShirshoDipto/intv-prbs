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

// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));

// --------------------- #2 Permutation ----------------------
function permutationHelper(remaining, soFar, allPerms, tabs = "  ") {
  // console.log(`${tabs}permutationsHelper(${remaining}, ${soFar})`);
  if (remaining === "") {
    allPerms.add(soFar);
  } else {
    for (let i = 0; i < remaining.length; i++) {
      const nextChar = remaining[i];
      const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
      permutationHelper(newRemaining, soFar + nextChar, allPerms, tabs + "  ");
    }
  }
}

function permutation(str) {
  const allPermutaations = new Set();
  permutationHelper(str, "", allPermutaations);
  return allPermutaations;
}

console.log(permutation("cat"));
console.log(permutation("c"));
console.log(permutation("tail"));
console.log(permutation("HHT"));
