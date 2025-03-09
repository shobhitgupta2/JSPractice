function delay() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

async function A() {
  await delay();
  console.log("A");
}

function B() {
  console.log("B");
}

async function main() {
  await A();
  B();
}

main();
