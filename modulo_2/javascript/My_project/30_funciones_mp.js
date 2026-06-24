// Diferentes formas de funciones en la vete
function saludar(mascota) {
  return "Hola " + mascota;
}

const dosis = (peso) => peso * 0.5;

const registrar = function(n) {
  console.log("Registrando " + n);
};

console.log(saludar("Firulais"));
console.log("Dosis: " + dosis(10));
registrar("Luna");
