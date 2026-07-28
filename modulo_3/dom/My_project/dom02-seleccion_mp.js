document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.getElementById("titulo");
  console.log("Titulo: ", titulo);

  const notas = document.getElementsByClassName("nota");
  console.log("Notas: ", notas);

  const items = document.getElementsByTagName("li");
  console.log("Items: ", items);

  const primeraMascota = document.querySelector(".mascota");
  console.log("Primera mascota: ", primeraMascota);

  const todasLasMascotas = document.querySelectorAll(".mascota");
  console.log("Todas las mascotas: ", todasLasMascotas);

  Array.from(todasLasMascotas).forEach((element) => {
    console.log("Mascota: ", element.textContent);
  });
});
