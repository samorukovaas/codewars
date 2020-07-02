// Your task is simply to count the total number of lowercase letters in a string.

// Examples
// lowercaseCount("abc"); ===> 3

// lowercaseCount("abcABC123"); ===> 3

const lowercaseCount = (str) => str.replace(/[^a-z]/g, "").length;
