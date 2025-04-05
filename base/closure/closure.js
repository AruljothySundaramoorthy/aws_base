function outer() {
  let name = "Arul";

  function inner() {
    console.log("Hello, " + name);
  }

  return inner;
}

const greet = outer();
greet();
