const { Given, When, Then } = require("@cucumber/cucumber");
const lengthOfLastWord = require("../../lengthOfLastWord");

let inputString;
let result;

Given("a string {string}", function (string) {
  inputString = string;
});

When("the lengthOfLastWord function is called", function () {
  result = lengthOfLastWord(inputString);
});

Then("the result should be {int}", function (expectedLength) {
  if (result !== expectedLength) {
    throw new Error(`Expected length ${expectedLength}, but got ${result}`);
  }
});
