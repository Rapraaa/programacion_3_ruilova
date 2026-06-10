const campoNumero1 = document.getElementById("campo_numero1");
const campoNumero2 = document.getElementById("campo_numero2");
const resultado = document.getElementById("resultado");
const boton = document.getElementById("btn_calcular");

boton.addEventListener("click", () => {
  const numero1 = parseFloat(campoNumero1.value);
  const numero2 = parseFloat(campoNumero2.value);
  const suma = numero1 + numero2;
  resultado.textContent = `Resultado: ${suma}`;
});
