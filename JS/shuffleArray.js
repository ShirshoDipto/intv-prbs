function normalShuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function FisherYatesShuffle(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

/** Normal shuffling is NOT totally random */
const count1 = {
  123: 0,
  132: 0,
  231: 0,
  213: 0,
  321: 0,
  312: 0,
};

for (let i = 0; i < 100000; i++) {
  const arr = [1, 2, 3];
  normalShuffle(arr);
  count1[arr.join("")]++;
}

console.log(count1);

/** Fisher-Yates algorithm is totally random */
const count2 = {
  123: 0,
  132: 0,
  231: 0,
  213: 0,
  321: 0,
  312: 0,
};

for (let i = 0; i < 100000; i++) {
  const arr = [1, 2, 3];
  FisherYatesShuffle(arr);
  count2[arr.join("")]++;
}

console.log(count2);
