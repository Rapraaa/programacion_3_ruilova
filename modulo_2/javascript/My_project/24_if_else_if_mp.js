const prompt = require("prompt-sync")();
const temperatura = prompt("Temperatura del perro: ");

if (temperatura > 39) {
  console.log("Tiene fiebre");
} else if (temperatura < 37) {
  console.log("Hipotermia");
} else {
  console.log("Temperatura normal");
}
