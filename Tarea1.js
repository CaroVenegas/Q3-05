// Ejercicio #1
const arr = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"]

const counts = {};
arr.forEach((x) => {

  counts[x] = (counts[x] || 0) + 1;
});

console.log(counts)

var arrays = [1,[2,3],4,5,[6,[7]]];
function flat(data) {
  var a = []
  data.forEach(e => Array.isArray(e) ? a = a.concat(flat(e)) : a.push(e));
  return a;
}
console.log (flat(arrays));




//Ejercicio #4
function squareDigits(n) {

    return +(n.toString().split('').map(val => val * val).join(''));
  
  }
  
  console.log(squareDigits(9119));