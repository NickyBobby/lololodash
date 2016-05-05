var _ = require("lodash");

var countingComments = function(comments) {

  var counted = [];

  var grouped = _.groupBy(comments, 'username');

  _.forEach(grouped, function(comments, name) {
    counted.push({
      username: name,
      comment_count: _.size(comments)
    });
  })

  return _.sortBy(counted, 'comment_count').reverse();
};

module.exports = countingComments;
