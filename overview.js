var _  = require("lodash");


var overview = function(list) {

  var total = [];

  var grouped = _.groupBy(list, 'article');

  _.forEach(grouped, function(orders, article_number) {
    total.push({
      article: parseInt(article_number),
      total_orders: _.reduce(orders, function(sum, item) {
        return sum + item.quantity;
      }, 0)
    })
  })
  return total.reverse()
};

module.exports = overview;
