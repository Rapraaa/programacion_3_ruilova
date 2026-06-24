const prompt = require("prompt-sync")();
const totalCompra = prompt("Ingrese el total de la compra: ");

if (totalCompra < 100) {
  console.log("Aplica descuento");
}

const velocidad = prompt("Ingrese la velocidad de el vehiculo(km/h): ");

if (velocidad > 90) {
  console.log("Exceso de velocidad");
}

const totalAsistencias = prompt("Ingrese el total de asistencias: ");

if (totalAsistencias < 70) {
  console.log("Pierde la materia por faltas");
} else {
  console.log("Asistencias suficientes");
}
