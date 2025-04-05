console.log("1");

async function getData() {
  console.log("2");
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("4");
    }, 1000);
  });
  console.log(result);
}

getData();

console.log("3");
