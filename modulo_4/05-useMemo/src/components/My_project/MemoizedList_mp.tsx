import { useState, useCallback, memo } from "react";

interface Tarea {
  id: number;
  texto: string;
  hecha: boolean;
}

const TAREAS_INICIALES: Tarea[] = [
  { id: 1, texto: "Revisar a Rex en la jaula 2", hecha: false },
  { id: 2, texto: "Aplicar vacuna a Michi", hecha: true },
  { id: 3, texto: "Limpiar el quirofano", hecha: false },
  { id: 4, texto: "Llamar al dueño de Lola", hecha: false },
  { id: 5, texto: "Pedir mas jeringuillas", hecha: false },
];

let contadorRenders = 0;

const FilaTarea = memo(function FilaTarea({
  tarea,
  onToggle,
  onDelete,
}: {
  tarea: Tarea;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}) {
  contadorRenders++;
  const render = contadorRenders;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 14px",
        background: tarea.hecha ? "#f0fdf4" : "#fafafa",
        borderRadius: 8,
        border: "1px solid",
        borderColor: tarea.hecha ? "#86efac" : "#e5e5e5",
      }}
    >
      <input
        type="checkbox"
        checked={tarea.hecha}
        onChange={() => onToggle(tarea.id)}
        style={{ cursor: "pointer", width: 16, height: 16 }}
      />
      <span
        style={{
          flex: 1,
          fontSize: 14,
          textDecoration: tarea.hecha ? "line-through" : "none",
          color: tarea.hecha ? "#666" : "#111",
        }}
      >
        {tarea.texto}
      </span>
      <span style={{ fontSize: 11, color: "#aaa" }}>render #{render}</span>
      <button
        onClick={() => onDelete(tarea.id)}
        style={{
          padding: "2px 8px",
          borderRadius: 4,
          border: "1px solid #fca5a5",
          background: "#fef2f2",
          color: "#dc2626",
          cursor: "pointer",
          fontSize: 12,
        }}
      >
        X
      </button>
    </div>
  );
});

export default function MemoizedList_mp() {
  const [tareas, setTareas] = useState<Tarea[]>(TAREAS_INICIALES);
  const [contador, setContador] = useState(0);

  const handleToggle = useCallback((id: number) => {
    setTareas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, hecha: !t.hecha } : t)),
    );
  }, []);

  const handleDelete = useCallback((id: number) => {
    setTareas((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 520, margin: "0 auto", padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
        Pendientes del turno
      </h2>
      <p style={{ color: "#666", fontSize: 14, marginBottom: 20 }}>
        Con memo y useCallback las filas no se vuelven a renderizar por el
        contador de al lado.
      </p>

      <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20 }}>
        <button
          onClick={() => setContador((c) => c + 1)}
          style={{ padding: "6px 16px", borderRadius: 6, border: "1px solid #ccc", cursor: "pointer" }}
        >
          Incrementar contador ({contador})
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {tareas.map((tarea) => (
          <FilaTarea
            key={tarea.id}
            tarea={tarea}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <p style={{ marginTop: 16, fontSize: 12, color: "#aaa" }}>
        Renders totales de filas: {contadorRenders}
      </p>
    </div>
  );
}
