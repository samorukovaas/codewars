// Create a function called shortcut to remove all the lowercase vowels in a given string.

// Examples
// shortcut("codewars") // --> cdwrs
// shortcut("goodbye")  // --> gdby
// Don't worry about uppercase vowels.

const shortcut = (string) => string.replace(/[aeiou]/g, "");
