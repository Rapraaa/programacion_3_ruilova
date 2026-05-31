const prompt = require("prompt-sync")();

console.log("=== Calculadora Vete ===");
const n1 = parseFloat(prompt("Peso mascota 1: "));
const n2 = parseFloat(prompt("Peso mascota 2: "));

console.log(`
Suma: ${n1 + n2}
Media: ${(n1 + n2) / 2}
`);
