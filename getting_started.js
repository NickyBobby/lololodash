var _ = require("lodash");

var worker = function(person) {
  return _.filter(person, {active: true});
};

module.exports = worker;
