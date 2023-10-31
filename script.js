function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  let result = '';

  for (let i = 0; i < 7; i++) {
    const numeral = obj[i];
    while (num >= numeral[1]) {
      result += numeral[0];
      num -= numeral[1];
    }
  }

  return result;
}

// console.log(convertToRoman(36));


// do not edit below this line
module.exports = convertToRoman
