// Funciones vete
function cobrar(precio: number, cant: number): number {
  return precio * cant;
}

const saludar = (n: string): string => `Hola ${n}`;

function mostrarInfo(m: string, edad?: number): void {
  console.log(`Paciente: ${m}` + (edad ? ` Edad: ${edad}` : ""));
}

console.log(saludar("Rex"));
console.log("Cobro: " + cobrar(20, 2));
mostrarInfo("Luna");
mostrarInfo("Luna", 3);
