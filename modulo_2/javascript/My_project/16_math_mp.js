console.log(Math.round(4.4)); // 4
console.log(Math.floor(4.9)); // 4 - piso
console.log(Math.ceil(4.1));  // 5 - techo
console.log(Math.max(10, 20, 5)); // 20 - el mas pesado
console.log(Math.random());   // aleatorio para sorteo vete

// Dado para sorteo
function sortear(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(sortear(1, 10));
