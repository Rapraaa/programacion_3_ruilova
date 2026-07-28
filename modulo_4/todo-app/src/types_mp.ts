export interface Cita {
  id: string;
  mascota: string;
  atendida: boolean;
}

export type Filtro = "todas" | "pendientes" | "atendidas";

export interface Veterinario {
  id: string;
  nombre: string;
}
