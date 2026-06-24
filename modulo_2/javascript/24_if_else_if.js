const prompt = require("prompt-sync")();
/*
const temperatura = prompt("Ingrese la temperatura en grados Celsius: ");

if (temperatura >= 35) {
  console.log("🌡️ Calor extremo. Evitar actividad al aire libre.");
} else if (temperatura >= 25) {
  console.log("☀️ Temperatura cálida. Condiciones ideales para exteriores.");
} else if (temperatura >= 15) {
  console.log("🌤️ Temperatura agradable. Llevar una chaqueta ligera.");
} else if (temperatura >= 5) {
  console.log("🧥 Temperatura fría. Abrigarse bien.");
} else {
  console.log("❄️ Temperatura bajo cero. Riesgo de heladas.");
}
// ☀️ Temperatura cálida. Condiciones ideales para exteriores.

const pesoKg = 4.5;
const TARIFA_LIGERO = 2.5;
const TARIFA_MEDIANO = 5.0;
const TARIFA_PESADO = 9.0;
const TARIFA_ESPECIAL = 15.0;

let costoEnvio;
let categoriaPeso;

if (pesoKg <= 1) {
  costoEnvio = TARIFA_LIGERO;
  categoriaPeso = "Ligero";
} else if (pesoKg <= 5) {
  costoEnvio = TARIFA_MEDIANO;
  categoriaPeso = "Mediano";
} else if (pesoKg <= 20) {
  costoEnvio = TARIFA_PESADO;
  categoriaPeso = "Pesado";
} else {
  costoEnvio = TARIFA_ESPECIAL;
  categoriaPeso = "Especial — requiere gestión manual";
}

console.log(`Paquete: ${pesoKg} kg`);
console.log(`Categoría: ${categoriaPeso}`);
console.log(`Costo de envío: $${costoEnvio.toFixed(2)}`);
// Paquete: 4.5 kg
// Categoría: Mediano
// Costo de envío: $5.00

const nota = prompt("Ingrese la nota sobre 100: "); // sobre 100

let calificacion;
let aprobado;

if (nota >= 90) {
  calificacion = "A — Excelente";
  aprobado = true;
} else if (nota >= 80) {
  calificacion = "B — Muy bueno";
  aprobado = true;
} else if (nota >= 70) {
  calificacion = "C — Bueno";
  aprobado = true;
} else if (nota >= 60) {
  calificacion = "D — Suficiente";
  aprobado = true;
} else {
  calificacion = "F — Reprobado";
  aprobado = false;
}

console.log(`Nota: ${nota}/100`);
console.log(`Calificación: ${calificacion}`);
console.log(`Estado: ${aprobado ? "Aprobado ✅" : "Reprobado ❌"}`);
// Nota: 78/100
// Calificación: C — Bueno
// Estado: Aprobado ✅
*/

const consumoEnergia = prompt("Ingrese el consumo de energía en kWh: ");

if (consumoEnergia <= 100) {
  console.log("Consumo bajo");
} else if (consumoEnergia <= 300) {
  console.log("Consumo Medio");
} else {
  console.log("Consumo alto");
}

const sueldo = prompt("Ingrese su sueldo: ");

if (sueldo < 500) {
  console.log("Sueldo bajo");
} else if (sueldo >= 500 && sueldo <= 1000) {
  console.log("Sueldo medio");
} else {
  console.log("sueldo Alto");
}

const diaSemana = prompt("Ingrese el día de la semana(1-7): ");
if (diaSemana >= 1 && diaSemana <= 5) {
  console.log("Dia laboral");
} else if (diaSemana == 6) {
  console.log("Sabado");
} else if (diaSemana == 7) {
  console.log("Domingo");
} else {
  console.log("Día inválido");
}
