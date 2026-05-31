// Abstraccion en cobros
class CajaVete {
  private saldo: number = 0;

  constructor(inicial: number) {
    this.saldo = inicial;
  }

  ingreso(monto: number) {
    this.saldo += monto;
    console.log(`Ingreso: ${monto}. Nuevo saldo: ${this.saldo}`);
  }

  getSaldo() { return this.saldo; }
}

const miCaja = new CajaVete(100);
miCaja.ingreso(25);
console.log("Final: " + miCaja.getSaldo());
