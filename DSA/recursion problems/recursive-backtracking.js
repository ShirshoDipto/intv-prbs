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

// console.log(permutation("cat"));
// console.log(permutation("c"));
// console.log(permutation("tail"));
// console.log(permutation("HHT"));

// ------------------ #3 Permutations from n coin tosses -------------------
function coinTossHelper(total, n, soFar, allPerms, tabs = "    ") {
  // console.log(`${tabs}coinTossHelper(${total}, ${n}, ${soFar})`);
  if (total === n) {
    allPerms.add(soFar);
  } else {
    coinTossHelper(total + 1, n, soFar + "H", allPerms, tabs + "    ");
    coinTossHelper(total + 1, n, soFar + "T", allPerms, tabs + "    ");
  }
}

function coinToss(n) {
  const allPermutations = new Set();
  coinTossHelper(0, n, "", allPermutations);
  return allPermutations;
}

// console.log(coinToss(4));
// console.log(coinToss(3));
// console.log(coinToss(2));
// console.log(coinToss(1));

// ------------------ #4 Combinations from a set of people --------------------
function combinationHelper(remaining, soFar, allCombs, tabs = "   ") {
  // console.log(`${tabs}combinationHelper(${remaining} ${Array.from(soFar)})`);
  if (remaining.length === 0) {
    allCombs.push(new Set(Array.from(soFar)));
  } else {
    const next = remaining.pop();
    combinationHelper(remaining, soFar, allCombs, tabs + "   ");
    soFar.add(next);
    combinationHelper(remaining, soFar, allCombs, tabs + "   ");
    remaining.push(next);
    soFar.delete(next);
  }
}

function combination(aSet) {
  const allCombs = [];
  combinationHelper(aSet, new Set(), allCombs);
  return allCombs;
}

// console.log(combination([]));
// console.log(combination(["Nick", "Kyle"]));
// console.log(combination(["Nick", "Kyle", "Trip"]));
// console.log(combination(["Nick", "Kyle", "Trip", "Shirsho"]));

// -------------------- #5 Binary Tree Path -------------------

function helper(root, index, soFar, allPaths, tabs = "   ") {
  // console.log(`${tabs}tree(${index}, ${soFar})`);
  if (!root[index]) {
    return false;
  } else {
    const path = soFar === "" ? `${root[index]}` : soFar + `->${root[index]}`;
    const path1 = helper(root, 2 * index + 1, path, allPaths);
    const path2 = helper(root, 2 * index + 2, path, allPaths);
    if (!path1 && !path2) {
      allPaths.push(path);
    }
    return true;
  }
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const allPaths = [];
  helper(root, 0, "", allPaths);
  return allPaths;
};

const root = [1, 2, 3, null, 5];
console.log(binaryTreePaths(root));
