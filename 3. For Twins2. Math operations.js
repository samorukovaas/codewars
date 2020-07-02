// A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you. The bricks top and bottom are square with sides equal to the bottles diameter. The bricks fits snuggly up to the bottle neck/rim. Just for fun and also to impress the magician and people around, you decide to calculate the brick's volume. Write a function iceBrickVolume that accepts these parameters:

// radius - bottle's radius (always > 0);
// bottleLength - total bottle length (always > 0);
// rimLength - length from bottle top to brick (always < bottleLength);
// And return volume of ice brick that magician managed to put into a bottle.

let radius = 1;
let bottleLength = 10;
let rimLength = 2;
const iceBrick = (radius, bottleLength, rimLength) => {
  let brickHeight = bottleLength - rimLength;
  let brickVolume = radius * 2 * radius;
  let result = brickHeight * brickVolume;
  return result;
};
