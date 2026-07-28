document.addEventListener("DOMContentLoaded", () => {
  const estado = document.getElementById("estado");
  estado.textContent = "Estado: en consulta con el veterinario";

  console.log("Estado:", estado);

  const link = document.getElementById("link");
  link.textContent = "Agendar cita";
  link.href = "https://www.google.com";
  link.classList.add("boton");
  console.log("Link:", link);
});
