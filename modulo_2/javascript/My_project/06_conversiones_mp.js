// Conversiones para cobrar en la vete
const precio_texto = "25";
const total = Number(precio_texto); 
const dosis = parseInt("5.5ml", 10); // 5 (lo corta)
const peso_exacto = parseFloat("12.45"); 

console.log(total); // 25
console.log(dosis); // 5
console.log(peso_exacto); // 12.45

// Coercion (ojo con esto)
console.log("Costo: " + 10); // "Costo: 10"
console.log("10" - 2); // 8
console.log(true + 5); // 6 (vacuna extra)

// Valores que dan false
console.log(Boolean(0)); // false
console.log(Number("gato")); // NaN
console.log(isNaN(Number("perro"))); // true
