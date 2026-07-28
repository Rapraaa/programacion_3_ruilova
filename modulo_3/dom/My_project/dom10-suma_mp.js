const campoConsulta = document.getElementById("campo_consulta");
const campoMedicamentos = document.getElementById("campo_medicamentos");
const resultado = document.getElementById("resultado");
const boton = document.getElementById("btn_calcular");

boton.addEventListener("click", () => {
  const consulta = parseFloat(campoConsulta.value);
  const medicamentos = parseFloat(campoMedicamentos.value);
  const total = consulta + medicamentos;
  resultado.textContent = `Total a pagar: $${total}`;
});
