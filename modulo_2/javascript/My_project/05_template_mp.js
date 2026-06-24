const mascota = "Luna";
const raza = "Labrador";
const peso_actual = 20;

console.log(`Paciente: ${mascota}`);

// Usando expresiones en el template
console.log(`Nombre en mayus: ${mascota.toUpperCase()}`);
console.log(`Peso en 1 mes (+2kg): ${peso_actual + 2} kg`);
console.log(`¿Es obesa? ${peso_actual > 25 ? "Si" : "No"}`);

const ficha = `
  --- FICHA MEDICA ---
  Nombre: ${mascota}
  Raza:   ${raza}
  Estado: ${peso_actual > 25 ? "Dieta" : "Sano"}
`;

console.log(ficha);
