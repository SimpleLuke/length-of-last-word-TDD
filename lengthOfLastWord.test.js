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

  it("returns length of the last word when the last index is a space", () => {
    expect(lengthOfLastWord("water bottle ")).toEqual(6);
  });

  it("throws an error when input is not a string", () => {
    expect(() => lengthOfLastWord(123)).toThrow("Input must be a string");
    expect(() => lengthOfLastWord(true)).toThrow("Input must be a string");
    expect(() => lengthOfLastWord(["water", "bottle"])).toThrow(
      "Input must be a string"
    );
  });

  it("throws an error when there is no input", () => {
    expect(() => lengthOfLastWord()).toThrow("Input must be a string");
  });

  it("throws an error when the string include punctuation marks", () => {
    expect(() => lengthOfLastWord("water,bottle")).toThrow(
      "Input must not include punctuation marks"
    );
    expect(() => lengthOfLastWord("water bottle.")).toThrow(
      "Input must not include punctuation marks"
    );
  });
});
