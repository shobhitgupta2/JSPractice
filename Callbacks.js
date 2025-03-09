// Callback
function greet(name) {
  console.log("Hello " + name);
}

// HO function
function greetShobhit(greetFunc, name) {
  greetFunc(name);
}

let userName = "Shobhit";

// Passing callback into HO function
greetShobhit(greet, userName);
