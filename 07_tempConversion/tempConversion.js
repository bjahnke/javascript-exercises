function round(value, decimals) {
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

const convertToCelsius = function(f) {
  return round(((f - 32) * 5 / 9), 1);
};

const convertToFahrenheit = function(c) {
  return round(c * 9 / 5 + 32, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
