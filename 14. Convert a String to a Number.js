// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

const stringToNumber = (str) => {
  return Number(str);
};

function elevator(left, right, call) {
  if (call === 0)
    if (left < right) return "left";
    else return "right";
  else if (call === 1)
    if (left === call && right !== call) return "left";
    else return "right";
  else if (call === 2)
    if (left > right) return "left";
    else return "right";
}
