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

function getAllOptions(cell, board) {
  const options = [];
  for (let i = 1; i < 10; i++) {
    if (isValidNum(cell, `${i}`, board)) {
      options.push(`${i}`);
    }
  }

  return options;
}

function getEmptyCells(board) {
  const emptyCells = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === ".") {
        const cell = {
          row: i,
          col: j,
        };
        const options = getAllOptions(cell, board);
        cell.options = options;
        emptyCells.push(cell);
      }
    }
  }

  return emptyCells;
}

function solveHelper(remaining, board) {
  if (remaining.length === 0) {
    return true;
  }

  const cell = remaining.pop();
  for (let i = 0; i < cell.options.length; i++) {
    if (isValidNum(cell, `${cell.options[i]}`, board)) {
      board[cell.row][cell.col] = `${cell.options[i]}`;
      if (!solveHelper(remaining, board)) {
        board[cell.row][cell.col] = ".";
      } else {
        return true;
      }
    }
  }

  remaining.push(cell);
  return false;
}

var solveSudoku = function (board) {
  const emptyCells = getEmptyCells(board);
  solveHelper(emptyCells, board);
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

solveSudoku(board);
console.log(board);
