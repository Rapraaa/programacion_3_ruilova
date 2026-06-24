const prompt = require("prompt-sync")();
// const horaActual = prompt("Escribe la hora actual en formato 24h: "); // hora en formato 24h

/* if (horaActual < 12) {
  console.log("Buenos días. Turno de mañana activo.");
} else {
  console.log("Buenas tardes. Turno de tarde activo.");
}
// Buenas tardes. Turno de tarde activo.

const ingresoMensual = 800;
const deudaActual = 200;
const INGRESO_MINIMO = 600;
const RATIO_DEUDA_MAXIMO = 0.4; // la deuda no debe superar el 40% del ingreso

const ratioDeuda = deudaActual / ingresoMensual;

if (ingresoMensual >= INGRESO_MINIMO && ratioDeuda <= RATIO_DEUDA_MAXIMO) {
  console.log("Crédito aprobado.");
  console.log(`Ratio deuda/ingreso: ${(ratioDeuda * 100).toFixed(1)}%`);
} else {
  console.log("Crédito denegado.");
  console.log(`Ingreso mínimo requerido: $${INGRESO_MINIMO}`);
  console.log(
    `Ratio deuda actual: ${(ratioDeuda * 100).toFixed(1)}% (máximo permitido: 40%)`,
  );
}
// Crédito aprobado.
// Ratio deuda/ingreso: 25.0%

const contrasenaIngresada = prompt("Ingresa la contraseña: ");
const contrasenaCorrecta = "Segura123";
let intentosFallidos = 0;
const MAX_INTENTOS = 3;

if (contrasenaIngresada === contrasenaCorrecta) {
  console.log("Autenticación exitosa. Bienvenido.");
} else {
  intentosFallidos++;
  const intentosRestantes = MAX_INTENTOS - intentosFallidos;
  console.log(
    `Contraseña incorrecta. Intentos restantes: ${intentosRestantes}`,
  );
}
// Autenticación exitosa. Bienvenido.
*/

const productosComprados = prompt("¿Cuántos productos compraste? ");
if (productosComprados >= 10) {
  console.log("Descuento aplicado");
} else {
  console.log("Sin descuento");
}

const contrasenaIngreso = prompt("Ingrese la contrasenia: ");
if (contrasenaIngreso === "1234") {
  console.log("Acesso permitido");
} else {
  console.log("Acesso denegado");
}

const horaActual = prompt("Escribe la hora actual en formato 24h: ");
if (horaActual < 12) {
  console.log("Buenos dias");
} else {
  console.log("Buenas tardes/noches");
}
