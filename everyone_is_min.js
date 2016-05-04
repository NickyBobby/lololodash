var _ = require("lodash");

var tempz = function(item) {
  var result = {
    hot: [],
    warm: []
  };

  function check_temp(temp) {
    return temp > 19;
  }

  _.forEach(item, function(city, cityname) {
    if (_.every(city, check_temp)) {
      result.hot.push(cityname);
    } else if (_.some(city, check_temp)) {
      result.warm.push(cityname);
    }
  });

  return result;
}

module.exports = tempz;
