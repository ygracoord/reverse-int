module.exports = function reverse (n) {
   if (n < 0) {
       const num = -n;
       return +num.toString().split('').reverse().join('')
   } else return +n.toString().split('').reverse().join('')
}

