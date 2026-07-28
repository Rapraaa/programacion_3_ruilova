const campoCita = document.getElementById("campo_cita");
const botonAgregar = document.getElementById("btn_agregar");
const listaCitas = document.getElementById("lista_citas");

function agregarCita() {
  const cita = campoCita.value.trim();
  if (cita !== "") {
    const li = document.createElement("li");
    li.textContent = cita;
    listaCitas.appendChild(li);
    campoCita.value = "";
  }
}

botonAgregar.addEventListener("click", agregarCita);

campoCita.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    agregarCita();
  }
});
