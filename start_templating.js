var _ = require("lodash");

var templating = function(list) {

  var myTemplate = "Hello <%= name %> (logins: <%= login.length %>)"
  return _.template(myTemplate)(list);
};


module.exports = templating;
