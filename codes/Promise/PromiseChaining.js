function task(message, delay) {
  return new Promise((resolve, reject) => {
    if (delay > 2000) {
      reject("More than 2s");
    } else {
      setTimeout(() => {
        console.log(message);
        resolve();
      }, delay);
    }
  });
}

// Chaining promises
task("Task 1 completed", 1000)
  .then(() => task("Task 2 completed", 2000))
  .then(() => task("Task 3 completed", 3000))
  // catched rejected promise
  .catch((err) => console.log("Error: " + err));
