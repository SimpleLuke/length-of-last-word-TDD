function lengthOfLastWord(string) {
  if (typeof string !== "string") {
    throw "Input must be a string";
  }
  const arr = string.trim().split(" ");
  return arr[arr.length - 1].length;
}

module.exports = lengthOfLastWord;
