const value1 = 50;
const value2 = 70;
const value3 = 50;

const soma = value1 + value2 + value3;

if (soma === 180) {
  console.log("true");
} else if (value1 < 0 || value2 < 0 || value3 < 0) {
  console.log("Ângulo invalido");
} else {
  console.log("false");
}