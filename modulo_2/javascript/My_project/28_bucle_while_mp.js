// Procesando mascotas en espera
const colaMascotas = [
  { id: "P01", urgencia: "alta", nombre: "Rex" },
  { id: "P02", urgencia: "media", nombre: "Luna" },
  { id: "P03", urgencia: "baja", nombre: "Toby" }
];

let i = 0;
console.log("=== Cola Vete UTE ===");

while (i < colaMascotas.length) {
  const p = colaMascotas[i];
  console.log(`${p.urgencia === "alta" ? "🔴" : "🟢"} [${p.id}] ${p.nombre}`);
  i++;
}
