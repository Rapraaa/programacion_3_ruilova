import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CitaList_mp } from "./CitaList_mp";
import type { Cita } from "../../types_mp";

const citas: Cita[] = [
  { id: "1", mascota: "Rex - vacuna", atendida: false },
  { id: "2", mascota: "Michi - control", atendida: true },
  { id: "3", mascota: "Lola - desparasitacion", atendida: false },
];

describe("CitaList_mp · queries", () => {
  it("deberia renderizar un listitem por cada cita", () => {
    render(
      <CitaList_mp citas={citas} onAtender={() => {}} onEliminar={() => {}} />,
    );
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(3);
  });

  it("deberia encontrar la lista por su aria-label", () => {
    render(
      <CitaList_mp citas={citas} onAtender={() => {}} onEliminar={() => {}} />,
    );
    expect(
      screen.getByRole("list", { name: "Lista de citas" }),
    ).toBeInTheDocument();
  });

  it("deberia mostrar el estado vacio cuando no hay citas", () => {
    render(
      <CitaList_mp citas={[]} onAtender={() => {}} onEliminar={() => {}} />,
    );
    expect(screen.getByText("No hay citas pendientes")).toBeInTheDocument();
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });

  it("deberia mostrar el texto de una cita concreta", () => {
    render(
      <CitaList_mp citas={citas} onAtender={() => {}} onEliminar={() => {}} />,
    );
    expect(screen.getByText("Michi - control")).toBeInTheDocument();
  });
});
