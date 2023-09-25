/** Using Array.filter() method */
function deleteGreatestValue(arr) {
  for (let i = 0; i < arr.length; i++) {
    let greatestVal = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > greatestVal) {
        greatestVal = arr[i][j];
      }
    }
    const newArr = arr[i].filter((elem) => elem !== greatestVal);
    arr[i] = newArr;
  }
}

const arr = [
  [1, 2, 3, 4],
  [42, 5, 2, 1],
  [-1, 2, -2],
];

deleteGreatestValue(arr);
console.log(arr);
