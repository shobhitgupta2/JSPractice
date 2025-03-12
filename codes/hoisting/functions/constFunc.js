// add is NOT hoisted -> not initialised at the top of the scope

// ReferenceError shows up because add isn't initialised yet
console.log(add(5, 6));

const add = (a, b) => {
  return a + b;
};
