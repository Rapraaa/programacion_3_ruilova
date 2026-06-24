const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Nombre de la mascota: ", (nombre) => {
  console.log(`Registrando a ${nombre} en el sistema...`);
  rl.close();
});
