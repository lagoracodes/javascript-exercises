const repeatString = function (word, times) {
  let result = '';
  // if

  for (let i = 0; i < times; i++) {
    result += word;
  }
  return result;
};

module.exports = repeatString;
