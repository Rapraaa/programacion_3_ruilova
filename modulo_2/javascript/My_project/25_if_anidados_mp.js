const prompt = require("prompt-sync")();
const edad = prompt("Edad Mascota: ");
const tiene_carnet = prompt("¿Tiene carnet? (s/n): ");

if (edad < 1) {
  if (tiene_carnet === "s") {
    console.log("Cachorro registrado");
  } else {
    console.log("Cachorro nuevo");
  }
} else {
  console.log("Adulto");
}
