var _ = require("lodash");

var analyze = function(list) {

  var total = _.reduce(list, function(sum, person) {
    return sum + person.income;
  }, 0)

  var averageSalary = total / _.size(list);

  var sortedList = _.sortBy(list, 'income');

  var overUnder = {
    average: averageSalary,
    underperform: _.filter(sortedList, function(person) {
      return person.income <= averageSalary;
    }),
    overperform: _.filter(sortedList, function(person) {
      return person.income > averageSalary;
    })
  }

  return overUnder;
}


module.exports = analyze;
