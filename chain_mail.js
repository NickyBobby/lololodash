var _ = require("lodash");


var chainMail = function(names) {
  return _.chain(names)
          .map(function(name) {
            return name.toUpperCase() + "CHAINED"
          })
          .sortBy()
}

module.exports = chainMail;
