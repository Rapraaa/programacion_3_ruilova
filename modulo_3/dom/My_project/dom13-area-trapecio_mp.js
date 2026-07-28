const baseMayor = document.getElementById("base_mayor");
const baseMenor = document.getElementById("base_menor");
const altura = document.getElementById("altura");
const resultado = document.getElementById("resultado_sala");
const boton = document.getElementById("btn_calcular");
const error = document.getElementById("error");

boton.addEventListener("click", () => {
  const bMayor = parseFloat(baseMayor.value);
  const bMenor = parseFloat(baseMenor.value);
  const alturaNumerica = parseFloat(altura.value);

  error.textContent = "";
  resultado.textContent = "";

  if (isNaN(bMayor) || isNaN(bMenor) || isNaN(alturaNumerica)) {
    error.textContent = "Por favor, ingrese medidas validas.";
    return;
  }

  if (bMayor <= 0 || bMenor <= 0 || alturaNumerica <= 0) {
    error.textContent = "Las medidas deben ser mayores que cero.";
    return;
  }

  const area = ((bMayor + bMenor) * alturaNumerica) / 2;
  resultado.textContent = `La sala de espera tiene ${area} metros cuadrados`;
});
