/**
 * Returns the closest number out of an array
 * @param  {Array}  arr
 * @param  {Number} num
 * @return {Number}
 */
function closestNumber(arr, num) {
  return arr.reduce((prev, curr) => (Math.abs(curr - num) < Math.abs(prev - num)) ? curr : prev);
}

module.exports = closestNumber;
