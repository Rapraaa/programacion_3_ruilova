// Encapsulamiento de Pacientes
class PacientePrivado {
  private _nombre: string;

  constructor(n: string) {
    this._nombre = n;
  }

  get nombre() { return this._nombre; }
  set nombre(n: string) {
    if (n.length < 2) console.log("Nombre muy corto");
    else this._nombre = n;
  }
}

const pp = new PacientePrivado("Rex");
pp.nombre = "A"; // corto
console.log(pp.nombre);
