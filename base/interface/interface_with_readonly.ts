interface Car {
  readonly vin: string;
  model: string;
}

const myCar: Car = {
  vin: "12345",
  model: "Toyota",
};

myCar.model = "Lexus";
// myCar.vin='232' //it'll thwor error coz its a readonly
