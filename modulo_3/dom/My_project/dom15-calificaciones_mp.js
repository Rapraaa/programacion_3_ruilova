const mascotas = [];
const PUNTAJE_MINIMO_SANO = 6;

function agregarMascota() {
  const nombre = document.getElementById("inNombre").value.trim();
  const puntaje = parseFloat(document.getElementById("inPuntaje").value);

  const divError = document.getElementById("error");
  divError.style.display = "none";

  if (nombre === "") {
    divError.textContent = "Por favor ingresa el nombre de la mascota.";
    divError.style.display = "block";
    return;
  }

  if (isNaN(puntaje) || puntaje < 0 || puntaje > 10) {
    divError.textContent = "El puntaje debe ser un numero entre 0 y 10.";
    divError.style.display = "block";
    return;
  }

  mascotas.push({ nombre, puntaje });

  document.getElementById("inNombre").value = "";
  document.getElementById("inPuntaje").value = "";
  document.getElementById("inNombre").focus();

  renderizarTabla();

  document.getElementById("estadisticas").style.display = "none";
}

function renderizarTabla() {
  const tbody = document.getElementById("tablaBody");
  tbody.innerHTML = "";

  mascotas.forEach((mascota, index) => {
    const sana = mascota.puntaje >= PUNTAJE_MINIMO_SANO;
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${index + 1}</td>
        <td>${mascota.nombre}</td>
        <td>${mascota.puntaje.toFixed(2)}</td>
        <td class="${sana ? "estado-sano" : "estado-tratamiento"}">
            ${sana ? "Sana" : "En tratamiento"}
        </td>
        <td>
            <button class="btn-eliminar" onclick="eliminarMascota(${index})" title="Eliminar">X</button>
        </td>
    `;
    tbody.appendChild(fila);
  });

  document.getElementById("listaMascotas").style.display =
    mascotas.length > 0 ? "block" : "none";
}

function eliminarMascota(index) {
  mascotas.splice(index, 1);
  renderizarTabla();
  document.getElementById("estadisticas").style.display = "none";
}

function calcularEstadisticas() {
  const divError = document.getElementById("error");
  divError.style.display = "none";

  if (mascotas.length === 0) {
    divError.textContent = "Agrega al menos una mascota antes de calcular.";
    divError.style.display = "block";
    return;
  }

  const puntajes = mascotas.map((m) => m.puntaje);
  const promedio = puntajes.reduce((acc, p) => acc + p, 0) / puntajes.length;
  const mayor = Math.max(...puntajes);
  const menor = Math.min(...puntajes);
  const sanas = mascotas.filter((m) => m.puntaje >= PUNTAJE_MINIMO_SANO).length;

  document.getElementById("sPromedio").textContent = promedio.toFixed(2);
  document.getElementById("sMayor").textContent = mayor.toFixed(2);
  document.getElementById("sMenor").textContent = menor.toFixed(2);
  document.getElementById("sSanos").textContent =
    `${sanas} / ${mascotas.length}`;

  document.getElementById("estadisticas").style.display = "block";
}

function limpiar() {
  mascotas.length = 0;
  renderizarTabla();
  document.getElementById("estadisticas").style.display = "none";
  document.getElementById("error").style.display = "none";
  document.getElementById("inNombre").value = "";
  document.getElementById("inPuntaje").value = "";
  document.getElementById("inNombre").focus();
}

window.onload = () => {
  ["inNombre", "inPuntaje"].forEach((id) => {
    document.getElementById(id).addEventListener("keydown", (e) => {
      if (e.key === "Enter") agregarMascota();
    });
  });
};
