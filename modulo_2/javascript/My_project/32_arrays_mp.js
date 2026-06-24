const temps = [38.5, 39.2, 37.8, 40.1, 38.0];

// Filtrar las que son fiebre (> 39)
const fiebre = temps.filter(t => t > 39);
console.log("Temperaturas con fiebre:", fiebre);

// Pasar a Fahrenheit (solo por practicar map)
const fahr = temps.map(t => (t * 9/5) + 32);
console.log("En Fahrenheit:", fahr);

// Suma de todas las temps
const suma = temps.reduce((acc, t) => acc + t, 0);
console.log("Media:", suma / temps.length);
