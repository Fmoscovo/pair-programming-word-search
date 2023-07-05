const wordSearch = (letters, word) => {
  let reversedArray = word.split("");
  reversedArray = reversedArray.reverse();

  const reversedWord = reversedArray.join("");

  const horizontalJoin = letters.map((ls) => ls.join(""));
  const transposedLetters = letters[0].map((col, i) =>
    letters.map((row) => row[i])
  );
  const verticalJoin = transposedLetters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  for (l of horizontalJoin) {
    if (l.includes(reversedWord)) return true;
  }
  for (l of verticalJoin) {
    if (l.includes(reversedWord)) return true;
  }
  return false;
};

const wordArray = [
  ["a", "b", "c", "d"],
  ["c", "f", "g", "h"],
  ["e", "z", "s", "t"],
];
console.log(wordSearch(wordArray, ""));

module.exports = wordSearch;
