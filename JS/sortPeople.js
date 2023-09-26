/**
 * Write a sortPeple function that takes an array of strings names and an array of heights
 * where names[i] === heights[i]. It should sort the names array based on the heights array.
 */

function sortPeople(names, heights) {
  const newNames = names.map((name, i) => {
    return {
      name,
      height: heights[i],
    };
  });

  newNames.sort((a, b) => b.height - a.height);

  return newNames.map((name) => name.name);
}

const names = ["John", "Maria", "Alexa", "Robert"];
const heights = [180, 160, 165, 187];

console.log(sortPeople(names, heights)); // ["Robert", "John", "Alexa", "Maria"]
