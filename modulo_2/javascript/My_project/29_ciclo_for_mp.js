// Reporte de Stock Medicamentos
const stock = [
  { nombre: "Paracetamol", cant: 5 },
  { nombre: "Antibiotico", cant: 0 },
  { nombre: "Vitaminas", cant: 12 }
];

console.log("=== Reporte Stock ===");
for (let i = 0; i < stock.length; i++) {
  const item = stock[i];
  let estado = item.cant === 0 ? "AGOTADO" : (item.cant < 10 ? "CRITICO" : "OK");
  console.log(`${item.nombre.padEnd(15)}: ${item.cant}u [${estado}]`);
}
