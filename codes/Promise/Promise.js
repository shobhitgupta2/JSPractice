let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Fulfilled");
  } else {
    reject("Rejected");
  }
});

p.then((res) => {
  console.log("Promise " + res);
}).catch((err) => {
  console.log("Promise" + err);
});
