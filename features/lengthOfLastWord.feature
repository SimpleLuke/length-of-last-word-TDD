Feature: Testing lengthOfLastWord function

Scenario: Calculate the length of the last word
    Given a string "Hello world"
    When the lengthOfLastWord function is called
    Then the result should be 5