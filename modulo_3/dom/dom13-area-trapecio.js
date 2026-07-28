const baseMayor = document.getElementById("base_mayor");
const baseMenor = document.getElementById("base_menor");
const altura = document.getElementById("altura");
const resultado = document.getElementById("resultado_trapecio");
const boton = document.getElementById("btn_calcular");
const error = document.getElementById("error");

boton.addEventListener("click", () => {
  const bMayorNumerico = parseFloat(baseMayor.value);
  const bMenorNumerico = parseFloat(baseMenor.value);
  const alturaNumerica = parseFloat(altura.value);
  if (isNaN(bMayorNumerico) || isNaN(bMenorNumerico) || isNaN(alturaNumerica)) {
    error.textContent = "Por favor, ingrese valores numéricos válidos.";
  }
  if (bMayorNumerico <= 0 || bMenorNumerico <= 0 || alturaNumerica <= 0) {
    error.textContent = "Por favor, ingrese valores numéricos válidos.";
  }

  const area = ((bMayorNumerico + bMenorNumerico) * alturaNumerica) / 2;
  resultado.textContent = `El área del trapecio es: ${area}`;
});
