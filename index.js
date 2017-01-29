var sortedObject = require('sorted-object');

module.exports = function objectAssignSorted() {
  return sortedObject(Object.assign.apply(null, arguments));
};
