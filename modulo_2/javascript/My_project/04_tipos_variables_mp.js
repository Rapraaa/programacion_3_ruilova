// Datos de la clinica
const salas = 4;
const precio = 15.99;
const chip_id = 1234567890n; // BigInt para chips largos

const perro = "Rex";
const es_macho = true;

const historial = null; // todavia no tiene
let proxima_cita; // undefined

console.log(typeof salas); // number
console.log(typeof perro); // string
console.log(typeof es_macho); // boolean
console.log(typeof historial); // object (el bug de siempre)
