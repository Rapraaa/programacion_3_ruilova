import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CitaItem_mp } from "./CitaItem_mp";
import type { Cita } from "../../types_mp";

function crearCita(overrides: Partial<Cita> = {}): Cita {
  return { id: "1", mascota: "Rex - vacuna", atendida: false, ...overrides };
}

describe("CitaItem_mp", () => {
  it("deberia mostrar el texto de la cita", () => {
    const cita = crearCita({ mascota: "Michi - control" });
    render(
      <CitaItem_mp cita={cita} onAtender={() => {}} onEliminar={() => {}} />,
    );
    expect(screen.getByText("Michi - control")).toBeInTheDocument();
  });

  it("deberia renderizar un checkbox", () => {
    const cita = crearCita();
    render(
      <CitaItem_mp cita={cita} onAtender={() => {}} onEliminar={() => {}} />,
    );
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("deberia mostrar un boton de eliminar", () => {
    const cita = crearCita();
    render(
      <CitaItem_mp cita={cita} onAtender={() => {}} onEliminar={() => {}} />,
    );
    expect(screen.getByRole("button", { name: "Eliminar" })).toBeInTheDocument();
  });
});
