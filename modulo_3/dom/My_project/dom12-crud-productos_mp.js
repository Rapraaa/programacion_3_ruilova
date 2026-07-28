const mascotas = [
  {
    id: 1,
    nombre: "Rex",
    especie: "Perro",
    peso: 24.5,
  },
  {
    id: 2,
    nombre: "Michi",
    especie: "Gato",
    peso: 4.2,
  },
  {
    id: 3,
    nombre: "Lola",
    especie: "Conejo",
    peso: 1.8,
  },
];

function renderMascotas() {
  const cuerpoTabla = document.getElementById("cuerpoTabla");

  cuerpoTabla.innerHTML = "";
  mascotas.forEach((mascota) => {
    const filaMascota = document.createElement("tr");
    filaMascota.innerHTML = `
            <td>${mascota.id}</td>
            <td>${mascota.nombre}</td>
            <td>${mascota.especie}</td>
            <td>${mascota.peso.toFixed(2)}</td>
            <td>
                <button onclick="editarMascota(${mascota.id})">Editar</button>
                <button onclick="eliminarMascota(${mascota.id})">Eliminar</button>
            </td>
        `;
    cuerpoTabla.appendChild(filaMascota);
  });

  actualizarEstadisticas();
}

function agregarMascota() {
  const nombreInput = document.getElementById("nombre").value.trim();
  const especieInput = document.getElementById("especie").value.trim();
  const pesoInput = document.getElementById("peso").value.trim();

  if (!nombreInput || !especieInput || !pesoInput) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  const nuevaMascota = {
    id: mascotas.length > 0 ? Math.max(...mascotas.map((m) => m.id)) + 1 : 1,
    nombre: nombreInput,
    especie: especieInput,
    peso: parseFloat(pesoInput),
  };

  mascotas.push(nuevaMascota);
  renderMascotas();
  limpiarFormulario();
}

function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("especie").value = "";
  document.getElementById("peso").value = "";
}

const agregarBtn = document.getElementById("btn_agregar");
agregarBtn.addEventListener("click", agregarMascota);

let idEditar = null;
function editarMascota(id) {
  const mascota = mascotas.find((m) => m.id === id);
  if (mascota) {
    document.getElementById("nombre").value = mascota.nombre;
    document.getElementById("especie").value = mascota.especie;
    document.getElementById("peso").value = mascota.peso;
    idEditar = id;
    agregarBtn.textContent = "Actualizar Mascota";
    agregarBtn.removeEventListener("click", agregarMascota);
    agregarBtn.addEventListener("click", actualizarMascota);
  }
}

function actualizarMascota() {
  const nombreInput = document.getElementById("nombre").value.trim();
  const especieInput = document.getElementById("especie").value.trim();
  const pesoInput = document.getElementById("peso").value.trim();

  if (!nombreInput || !especieInput || !pesoInput) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  const mascotaIndex = mascotas.findIndex((m) => m.id === idEditar);
  if (mascotaIndex !== -1) {
    mascotas[mascotaIndex] = {
      id: idEditar,
      nombre: nombreInput,
      especie: especieInput,
      peso: parseFloat(pesoInput),
    };

    renderMascotas();
    limpiarFormulario();
    agregarBtn.textContent = "Agregar Mascota";
    agregarBtn.removeEventListener("click", actualizarMascota);
    agregarBtn.addEventListener("click", agregarMascota);
    idEditar = null;
  }
}

function cancelarEdicion() {
  limpiarFormulario();
  agregarBtn.textContent = "Agregar Mascota";
  agregarBtn.removeEventListener("click", actualizarMascota);
  agregarBtn.addEventListener("click", agregarMascota);
  idEditar = null;
}

const cancelarBtn = document.getElementById("btn_cancelar");
cancelarBtn.addEventListener("click", cancelarEdicion);

function eliminarMascota(id) {
  const index = mascotas.findIndex((m) => m.id === id);
  if (index !== -1) {
    if (confirm("¿Esta seguro de eliminar esta mascota?")) {
      mascotas.splice(index, 1);
      renderMascotas();
    }
  }
}

function actualizarEstadisticas() {
  const totalMascotas = mascotas.length;

  const pesoPromedio =
    totalMascotas > 0
      ? (mascotas.reduce((sum, m) => sum + m.peso, 0) / totalMascotas).toFixed(2)
      : 0;

  document.getElementById("totalMascotas").textContent = totalMascotas;
  document.getElementById("pesoPromedio").textContent = pesoPromedio;

  const mascotaMasPesada =
    totalMascotas > 0 ? Math.max(...mascotas.map((m) => m.peso)) : 0;

  const mascotaMasLiviana =
    totalMascotas > 0 ? Math.min(...mascotas.map((m) => m.peso)) : 0;

  document.getElementById("mascotaMasPesada").textContent = mascotaMasPesada;
  document.getElementById("mascotaMasLiviana").textContent = mascotaMasLiviana;
}

window.onload = function () {
  renderMascotas();
};
