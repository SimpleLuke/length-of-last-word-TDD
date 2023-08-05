function lengthOfLastWord(string) {
  const arr = string.trim().split(" ");
  return arr[arr.length - 1].length;
}

module.exports = lengthOfLastWord;
