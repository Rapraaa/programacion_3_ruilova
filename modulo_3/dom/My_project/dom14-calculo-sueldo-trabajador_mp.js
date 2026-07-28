function fmt(valor) {
  return "$ " + valor.toFixed(2);
}

function calcularSueldo() {
  const sueldoBase = parseFloat(document.getElementById("inSueldoBase").value);
  const bono = parseFloat(document.getElementById("inBonoGuardias").value);
  const porcentajeIESS = parseFloat(document.getElementById("inIESS").value);
  const insumos = parseFloat(document.getElementById("inInsumos").value);

  const divError = document.getElementById("error");
  const divResultado = document.getElementById("resultado");

  divError.style.display = "none";
  divResultado.style.display = "none";

  if (isNaN(sueldoBase) || sueldoBase <= 0) {
    divError.textContent = "Ingresa un sueldo base valido (mayor que cero).";
    divError.style.display = "block";
    return;
  }

  if (isNaN(porcentajeIESS) || porcentajeIESS < 0 || porcentajeIESS > 100) {
    divError.textContent = "El porcentaje del IESS debe estar entre 0 y 100.";
    divError.style.display = "block";
    return;
  }

  const bonoVal = isNaN(bono) ? 0 : Math.max(0, bono);
  const insumosVal = isNaN(insumos) ? 0 : Math.max(0, insumos);

  const totalIngresos = sueldoBase + bonoVal;
  const deduccionIESS = sueldoBase * (porcentajeIESS / 100);
  const totalDeducciones = deduccionIESS + insumosVal;
  const sueldoNeto = totalIngresos - totalDeducciones;

  document.getElementById("rSueldoBase").textContent = fmt(sueldoBase);
  document.getElementById("rBono").textContent = fmt(bonoVal);
  document.getElementById("rTotalIngresos").textContent = fmt(totalIngresos);
  document.getElementById("rPorcentajeIESS").textContent =
    porcentajeIESS.toFixed(2);
  document.getElementById("rIESS").textContent = "- " + fmt(deduccionIESS);
  document.getElementById("rInsumos").textContent = "- " + fmt(insumosVal);
  document.getElementById("rTotalDeducciones").textContent =
    "- " + fmt(totalDeducciones);

  const spanNeto = document.getElementById("rSueldoNeto");
  spanNeto.textContent = fmt(sueldoNeto);
  spanNeto.style.color = sueldoNeto >= 0 ? "#1e8449" : "#c0392b";

  divResultado.style.display = "block";
}

function limpiar() {
  ["inSueldoBase", "inBonoGuardias", "inInsumos"].forEach((id) => {
    document.getElementById(id).value = "";
  });
  document.getElementById("inIESS").value = "9.45";
  document.getElementById("error").style.display = "none";
  document.getElementById("resultado").style.display = "none";
  document.getElementById("inSueldoBase").focus();
}

window.onload = () => {
  ["inSueldoBase", "inBonoGuardias", "inIESS", "inInsumos"].forEach((id) => {
    document.getElementById(id).addEventListener("keydown", (e) => {
      if (e.key === "Enter") calcularSueldo();
    });
  });
};
