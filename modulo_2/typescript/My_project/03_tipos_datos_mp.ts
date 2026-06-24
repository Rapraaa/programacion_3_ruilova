// Tipos de datos en la consulta
const mascota: string = "Firulais";
const peso: number = 15.5;
const vacunado: boolean = true;

// Union types
let id: string | number = "P-100";
id = 101; // permitido

// Any y Unknown
let dato: any = "texto";
dato = 10;

function procesar(val: unknown): string {
  if (typeof val === "string") return val.toUpperCase();
  return "No es texto";
}

console.log(procesar("perro"));
