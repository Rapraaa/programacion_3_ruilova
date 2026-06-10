const base = document.getElementById("campo_base");
const altura = document.getElementById("campo_altura");
const resultado = document.getElementById("resultado_triangulo");
const boton = document.getElementById("btn_calcular");

boton.addEventListener("click", () => {
  if (altura.value !== "" && base.value !== "") {
    const numero1 = parseFloat(base.value);
    const numero2 = parseFloat(altura.value);
    const area = (numero1 * numero2) / 2;
    resultado.textContent = `Resultado: ${area}`;
  }
});

altura.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && base.value !== "" && altura.value !== "") {
    const numero1 = parseFloat(base.value);
    const numero2 = parseFloat(altura.value);
    const area = (numero1 * numero2) / 2;
    resultado.textContent = `Resultado: ${area}`;
  }
});

base.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && altura.value !== "" && base.value !== "") {
    const numero1 = parseFloat(base.value);
    const numero2 = parseFloat(altura.value);
    const area = (numero1 * numero2) / 2;
    resultado.textContent = `Resultado: ${area}`;
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && altura.value !== "" && base.value !== "") {
    const numero1 = parseFloat(base.value);
    const numero2 = parseFloat(altura.value);
    const area = (numero1 * numero2) / 2;
    resultado.textContent = `Resultado: ${area}`;
  }
});
