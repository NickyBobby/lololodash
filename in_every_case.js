var _ = require("lodash");

var inEveryCase = function(list) {
  return _.forEach(list, function(city) {
    if (city.population > 1.0) {
      city.size = 'big';
    } else if (city.population < 0.5) {
      city.size = 'small';
    } else {
      city.size = 'med';
    }
  })
};

module.exports = inEveryCase
