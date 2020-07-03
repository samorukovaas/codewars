// Overview
// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
// Task
// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

const xor = (a, b) => (a !== b ? true : false);

function HQ9(code) {
  switch (code) {
    case "H":
      return "Hello World!";
    case "Q":
      return "Q";
    case "9":
      return "99 bottles of beer on the wall, 99 bottles of beer.\
Take one down and pass it around, 98 bottles of beer on the wall.\
98 bottles of beer on the wall, 98 bottles of beer. \
Take one down and pass it around, 97 bottles of beer on the wall.\
97 bottles of beer on the wall, 97 bottles of beer.\
Take one down and pass it around, 96 bottles of beer on the wall.\
...\
...\
...\
2 bottles of beer on the wall, 2 bottles of beer.\
Take one down and pass it around, 1 bottle of beer on the wall.\
1 bottle of beer on the wall, 1 bottle of beer.\
Take one down and pass it around, no more bottles of beer on the wall.\
No more bottles of beer on the wall, no more bottles of beer.\
Go to the store and buy some more, 99 bottles of beer on the wall.";
      break;
    default:
      return undefined;
  }
}
