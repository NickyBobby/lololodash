var _ = require("lodash");

var sortMe = function(collection) {
  return _.sortBy(collection, 'quantity').reverse();
}


module.exports = sortMe
