module.exports = function reverse (n) {
    let str = Math.abs(n).toString();
  return Number(str.split('').reverse().join(''));
}