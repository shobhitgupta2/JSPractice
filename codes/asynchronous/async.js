// normal function -> returns a string
const greet = () => {
  return "Hello";
};
console.log(greet());

// asynchronous function -> returns a Promise object
const greetAsync = async () => {
  return Promise.resolve("Hello");
};
greetAsync().then((value) => {
  console.log(value);
});
