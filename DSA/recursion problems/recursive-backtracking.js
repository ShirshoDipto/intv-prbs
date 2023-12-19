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
// console.log(binaryTreePaths(root));

// --------------------- #6 Letter Combination of a phone number ---------------------

function letterCombinationsHelper(remaining, soFar, allCombs, keymaps) {
  if (remaining.length === 0) {
    return allCombs.push(soFar);
  }

  const next = remaining[0];
  const chars = keymaps[next];
  for (let i = 0; i < chars.length; i++) {
    const aChar = chars[i];
    letterCombinationsHelper(
      remaining.slice(1),
      soFar + aChar,
      allCombs,
      keymaps
    );
  }
}

var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  const keymaps = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const allCombs = [];
  letterCombinationsHelper(digits, "", allCombs, keymaps);
  return allCombs;
};

// ------------------- #7 Sudoko Solver ----------------------

function getSubboxFilledOptions(cell, board, num) {
  const rowLowerLimit = Math.floor(cell.row / 3) * 3;
  const rowUpperLimit = rowLowerLimit + 2;
  const colLowerLimit = Math.floor(cell.col / 3) * 3;
  const colUpperLimit = colLowerLimit + 2;
  for (let i = rowLowerLimit; i < rowUpperLimit + 1; i++) {
    for (let j = colLowerLimit; j < colUpperLimit + 1; j++) {
      const boardCell = board[i][j];
      if (i !== cell.row && j !== cell.col && boardCell === num) {
        return false;
      }
    }
  }
  return true;
}

function isValidNum(cell, num, board) {
  for (let i = 0; i < 9; i++) {
    if (
      board[cell.row][i] === num ||
      board[i][cell.col] === num ||
      !getSubboxFilledOptions(cell, board, num)
    ) {
      return false;
    }
  }
  return true;
}
