// myVar is hoisted:
// myVar = undefined

// Logs undefined because myVar isn't initialised yet
console.log(myVar);

var myVar = "Hello World";

// Logs "Hello World" because myVar is initialised
console.log(myVar);
