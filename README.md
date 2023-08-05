58. Length of Last Word

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

| Input            | Output                                                 |
| ---------------- | ------------------------------------------------------ |
| ''               | 0                                                      |
| 'a'              | 1                                                      |
| 'are'            | 3                                                      |
| 'water bottle'   | 6                                                      |
| 'a water bottle' | 6                                                      |
| 'water bottle '  | 6                                                      |
| 123              | Throw error 'Input must be a string'                   |
| true             | Throw error 'Input must be a string'                   |
| No input         | Throw error 'Input must be a string'                   |
| 'water,bottle'   | Throw error 'Input must not include punctuation marks' |
