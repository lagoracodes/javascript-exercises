const repeatString = function (word, times) {
  let result = '';

  if (times < 0) {
    return 'ERROR';
  } else {
    for (let i = 0; i < times; i++) {
      result += word;
    }
    return result;
  }
};

module.exports = repeatString;
