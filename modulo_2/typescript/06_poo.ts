// primera-clase.ts

class Persona {
  // Atributos
  nombre: string;
  edad: number;

  // Constructor — se ejecuta al crear la persona con new
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Métodos
  saludar(): string {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }

  cumplirAños(): void {
    this.edad++;
    console.log(
      `¡Feliz cumpleaños, ${this.nombre}! Ahora tienes ${this.edad}.`,
    );
  }
}

// Crear instancias (objetos) con new
const ana = new Persona("Ana García", 28);
const luis = new Persona("Luis Pérez", 31);

console.log(ana.saludar());
console.log(luis.saludar());
ana.cumplirAños();
console.log(ana.saludar());

// abstraccion.ts

class CuentaBancaria {
  // El saldo y el historial son internos — nadie los ve directamente
  private saldo: number;
  private historial: string[] = [];

  constructor(titular: string, saldoInicial: number) {
    this.saldo = saldoInicial;
    this.historial.push(`Cuenta creada con ${saldoInicial}€`);
    console.log(`Cuenta de ${titular} creada.`);
  }

  // Interfaz pública — lo que el usuario ve y usa
  depositar(cantidad: number): void {
    this.saldo += cantidad;
    this.registrar(`Depósito: +${cantidad}€`); // método interno
    console.log(`  Depositado ${cantidad}€. Saldo: ${this.saldo}€`);
  }

  retirar(cantidad: number): void {
    if (cantidad > this.saldo) {
      console.log("  Error: saldo insuficiente.");
      return;
    }
    this.saldo -= cantidad;
    this.registrar(`Retiro: -${cantidad}€`);
    console.log(`  Retirado ${cantidad}€. Saldo: ${this.saldo}€`);
  }

  consultarSaldo(): number {
    return this.saldo;
  }

  verHistorial(): void {
    console.log("\n  Historial:");
    this.historial.forEach((h) => console.log(`    ${h}`));
  }

  // Método privado — el usuario NO sabe que existe
  // Solo se usa internamente
  private registrar(operacion: string): void {
    this.historial.push(operacion);
  }
}

console.log("=== CUENTA BANCARIA ===\n");
const cuenta = new CuentaBancaria("Ana García", 1000);

cuenta.depositar(500);
cuenta.retirar(200);
cuenta.retirar(2000); // intento fallido

console.log(`\nSaldo actual: ${cuenta.consultarSaldo()}€`);
cuenta.verHistorial();

// El usuario no puede acceder directamente al saldo
// cuenta.saldo = 999999;  // ❌ Error — saldo es private
