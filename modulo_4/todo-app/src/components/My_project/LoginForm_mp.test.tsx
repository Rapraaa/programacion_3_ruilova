import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { LoginForm_mp } from "./LoginForm_mp";

describe("LoginForm_mp · queries", () => {
  it("deberia encontrar los campos por su label", () => {
    render(<LoginForm_mp onLogin={() => {}} />);
    expect(screen.getByLabelText("Usuario")).toBeInTheDocument();
    expect(screen.getByLabelText("Contraseña")).toBeInTheDocument();
  });

  it("deberia encontrar el boton por rol y nombre", () => {
    render(<LoginForm_mp onLogin={() => {}} />);
    expect(screen.getByRole("button", { name: "Entrar" })).toBeInTheDocument();
  });

  it("deberia encontrar el formulario por su rol con name", () => {
    render(<LoginForm_mp onLogin={() => {}} />);
    expect(
      screen.getByRole("form", { name: "Formulario de acceso" }),
    ).toBeInTheDocument();
  });

  it("NO deberia mostrar un mensaje de error al inicio", () => {
    render(<LoginForm_mp onLogin={() => {}} />);
    expect(
      screen.queryByText("Credenciales invalidas"),
    ).not.toBeInTheDocument();
  });
});
