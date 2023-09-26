/** ------------ For debugging ------------ */

// function calcPermutationsHelper(remaining, soFar, arr, tabs = "") {
//   console.log(`${tabs}calcPermutationsHelper(${remaining}, ${soFar})`); // for debugging purpose...
//   if (remaining.length === 0) {
//     arr.push(soFar);
//   } else {
//     for (let i = 0; i < remaining.length; i++) {
//       const nextChar = remaining[i] + soFar;
//       const nextRemaining = remaining.replace(remaining[i], "");
//       // or
//       // const nextRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
//       calcPermutationsHelper(nextRemaining, nextChar, arr, tabs + "  ");
//     }
//   }
// }

function calcPermutationsHelper(remaining, soFar, arr) {
  if (remaining.length === 0) {
    arr.push(soFar);
  } else {
    for (let i = 0; i < remaining.length; i++) {
      const nextChar = remaining[i] + soFar;
      const nextRemaining = remaining.replace(remaining[i], "");
      // or
      // const nextRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
      calcPermutationsHelper(nextRemaining, nextChar, arr);
    }
  }
}

function calcPermutations(str) {
  const arr = [];
  calcPermutationsHelper(str, "", arr);
  return arr;
}

const permutations = calcPermutations("lol"); // includes duplicates
console.log(permutations);

const uniquePermutations = Array.from(new Set(permutations));
console.log(uniquePermutations);
