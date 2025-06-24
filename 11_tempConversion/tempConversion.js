const convertToCelsius = function (f) {
  let result = 0;
  result = (f - 32) * 5 / 9;
  return parseFloat(result.toFixed(1));
};

const convertToFahrenheit = function (c) {
  let result = 0;
  result = (c * 9 / 5) + 32;
  return parseFloat(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
