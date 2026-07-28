// src/components/TodoItem.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TodoItem } from "./TodoItem";
import type { Todo } from "../types";
// src/components/TodoItem.test.tsx  (añade arriba, tras los imports)
// Helper local: crea una tarea con valores por defecto sobreescribibles.
function crearTodo(overrides: Partial<Todo> = {}): Todo {
  return { id: "1", text: "Comprar pan", completed: false, ...overrides };
}
describe("TodoItem", () => {
  it("debería mostrar el texto de la tarea", () => {
    const todo = crearTodo({ text: "Estudiar Vitest" });
    render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />);
    expect(screen.getByText("Estudiar Vitest")).toBeInTheDocument();
  });
  // src/components/TodoItem.test.tsx  (añade este it dentro del describe)
  it("debería renderizar un checkbox", () => {
    const todo = crearTodo();
    render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });
  it("debería mostrar un botón de eliminar", () => {
    const todo = crearTodo();
    render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />);
    expect(
      screen.getByRole("button", { name: "Eliminar" }),
    ).toBeInTheDocument();
  });
});
