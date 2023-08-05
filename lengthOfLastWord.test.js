const lengthOfLastWord = require("./lengthOfLastWord");

describe("lengthOfLastWord", () => {
  it("returns 0 with empty string", () => {
    expect(lengthOfLastWord("")).toEqual(0);
  });

  it("returns length of the word when given a word", () => {
    expect(lengthOfLastWord("a")).toEqual(1);
    expect(lengthOfLastWord("are")).toEqual(3);
  });

  it("returns length of the last word when given words", () => {
    expect(lengthOfLastWord("water bottle")).toEqual(6);
    expect(lengthOfLastWord("smart boy")).toEqual(3);
    expect(lengthOfLastWord("a water bottle")).toEqual(6);
  });
});
