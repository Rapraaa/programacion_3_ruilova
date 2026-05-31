// Polimorfismo Tratamientos
abstract class Tratamiento {
  abstract aplicar(): void;
}

class Vacuna extends Tratamiento {
  aplicar() { console.log("Aplicando vacuna..."); }
}

class Cirugia extends Tratamiento {
  aplicar() { console.log("Realizando cirugia..."); }
}

const lista: Tratamiento[] = [new Vacuna(), new Cirugia()];
lista.forEach(t => t.aplicar());
