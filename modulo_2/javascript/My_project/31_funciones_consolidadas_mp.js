// Calculadora de costos vete
const sumar = (a, b) => a + b;
const desc = (total, d) => total - (total * d);

function calcular(a, b, op) {
  if (op === "+") return sumar(a, b);
  if (op === "-") return desc(a, b);
  return "Op no valida";
}

console.log("Total: " + calcular(100, 0.1, "-")); // 90
