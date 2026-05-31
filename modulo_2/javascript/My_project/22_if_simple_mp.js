const prompt = require("prompt-sync")();
const peso = prompt("Peso: ");

if (peso > 20) {
  console.log("Perro Grande");
}

if (peso < 5) {
  console.log("Perro Pequeño");
}
