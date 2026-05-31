const estado = "cirugia";

switch (estado) {
  case "sano":
    console.log("Puede irse");
    break;
  case "enfermo":
    console.log("Dar pastilla");
    break;
  case "cirugia":
    console.log("No darle de comer");
    break;
  default:
    console.log("Estado no valido");
}
