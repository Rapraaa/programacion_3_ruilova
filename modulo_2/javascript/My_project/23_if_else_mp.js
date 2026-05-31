const prompt = require("prompt-sync")();
const vax = prompt("¿Esta vacunado? (s/n): ");

if (vax === "s") {
  console.log("Puede entrar a la vete");
} else {
  console.log("Primero debe vacunarse");
}
