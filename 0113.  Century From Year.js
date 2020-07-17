// Given a year, return the century it is in.

// Input , Output Examples ::
// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)
// Hope you enjoy it .. Awaiting for Best Practice Codes

// Enjoy Learning !!!

const century = (year) => {
  //No native methods challenge
  let num = 0;
  for (let i = 0; i < year; i += 100) {
    num++;
  }
  return num;
};

// const century = (year) => ((year + 99) / 100) | 0;
