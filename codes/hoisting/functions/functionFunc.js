// add is FULLY hoisted -> initialised properly at the top of the scope

// Logs appropriate value because add() is initialised
console.log(add(5, 6));

function add(a, b) {
  return a + b;
}
