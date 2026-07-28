import { useState } from "react";

interface Tarea {
  id: number;
  texto: string;
  hecha: boolean;
}

export default function TaskManager_mp() {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [input, setInput] = useState("");

  function agregarTarea() {
    if (!input.trim()) return;
    setTareas((prev) => [
      ...prev,
      { id: Date.now(), texto: input.trim(), hecha: false },
    ]);
    setInput("");
  }

  function quitarTarea(id: number) {
    setTareas((prev) => prev.filter((tarea) => tarea.id !== id));
  }

  function marcarTarea(id: number) {
    setTareas((prev) =>
      prev.map((tarea) =>
        tarea.id === id ? { ...tarea, hecha: !tarea.hecha } : tarea,
      ),
    );
  }

  return (
    <div style={{ maxWidth: 380 }}>
      <h1>Pendientes del turno</h1>

      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && agregarTarea()}
          placeholder="Revisar a Rex en la jaula 2..."
          style={{
            flex: 1,
            padding: "8px 12px",
            borderRadius: 6,
            border: "1px solid #ddd",
          }}
        />
        <button
          onClick={agregarTarea}
          style={{
            padding: "8px 16px",
            background: "#0f766e",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Agregar
        </button>
      </div>

      {tareas.length === 0 && (
        <p style={{ color: "#999", fontSize: 14 }}>
          No hay pendientes en este turno.
        </p>
      )}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tareas.map((tarea) => (
          <li
            key={tarea.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <input
              type="checkbox"
              checked={tarea.hecha}
              onChange={() => marcarTarea(tarea.id)}
            />
            <span
              style={{
                flex: 1,
                textDecoration: tarea.hecha ? "line-through" : "none",
                color: tarea.hecha ? "#aaa" : "#333",
              }}
            >
              {tarea.texto}
            </span>
            <button
              onClick={() => quitarTarea(tarea.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#e00",
                fontSize: 16,
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>

      {tareas.length > 0 && (
        <p style={{ fontSize: 13, color: "#888", marginTop: 8 }}>
          {tareas.filter((t) => t.hecha).length} de {tareas.length} completadas
        </p>
      )}
    </div>
  );
}
