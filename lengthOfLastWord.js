function lengthOfLastWord(string) {
  const arr = string.split(" ");
  return arr[arr.length - 1].length;
}

module.exports = lengthOfLastWord;
