const llamarPaciente = () => {
  alert("Pasa el siguiente paciente al consultorio 2");
};

const agregarMascota = () => {
  const lista = document.getElementById("lista-mascotas-1");
  const nuevaMascota = document.createElement("li");
  nuevaMascota.textContent = "Mascota nueva";
  lista.appendChild(nuevaMascota);
};

document.getElementById("btn3").addEventListener("click", () => {
  const lista2 = document.getElementById("lista-mascotas2");
  const nuevaMascota = document.createElement("li");
  nuevaMascota.textContent = "Mascota nueva";
  lista2.appendChild(nuevaMascota);
});

const cambiarDiagnostico = () => {
  const diagnostico = document.getElementById("diagnostico");
  diagnostico.textContent =
    "El paciente tiene una infeccion, se receta antibiotico por 7 dias";
};

let turno = 1;
document.getElementById("btn6").addEventListener("click", () => {
  turno++;
  document.getElementById("turno").textContent = `Turno actual: ${turno}`;
});

document.getElementById("campos").addEventListener("input", () => {
  console.log("Mascota: ", document.getElementById("campos").value);
});

document.getElementById("campo_dueno").addEventListener("input", () => {
  const valorCampo = document.getElementById("campo_dueno").value;
  document.getElementById("parrafo").textContent = `Dueño: ${valorCampo}`;
});
