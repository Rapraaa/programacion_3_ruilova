const prompt = require("prompt-sync")();

const mascota = prompt("Nombre del paciente: ");
console.log(`Buscando historial de ${mascota}...`);

const pesoTexto = prompt("Peso actual: ");
const peso = parseFloat(pesoTexto);

if (isNaN(peso)) {
  console.log("Error: Ingresa un numero para el peso.");
} else {
  console.log(`El peso de ${mascota} es ${peso} kg.`);
}
