const base = document.getElementById("campo_base");
const altura = document.getElementById("campo_altura");
const resultado = document.getElementById("resultado_corral");
const boton = document.getElementById("btn_calcular");

function calcularArea() {
  if (base.value !== "" && altura.value !== "") {
    const numero1 = parseFloat(base.value);
    const numero2 = parseFloat(altura.value);
    const area = (numero1 * numero2) / 2;
    resultado.textContent = `El corral tiene ${area} metros cuadrados`;
  }
}

boton.addEventListener("click", calcularArea);

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    calcularArea();
  }
});
