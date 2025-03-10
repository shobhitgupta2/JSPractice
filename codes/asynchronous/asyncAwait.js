// async function
const greet = async () => {
  // await keyword makes JS pause until Promise is settled
  let result = await new Promise((resolve) => {
    setTimeout(() => resolve("Hello World"), 5000);
  });

  // only comes here AFTER Promise is settled
  console.log(result);
};

greet();
