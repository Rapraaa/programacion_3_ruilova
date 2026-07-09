// src/components/InlineStyleDemo.tsx

import type { CSSProperties } from "react";

export default function InlineStyleDemo() {
  // CSSProperties tipa el objeto — TypeScript detecta errores al escribir
  const card: CSSProperties = {
    border: "1px solid var(--border)",
    background: "var(--card)",
    borderRadius: 10,
    padding: 16,
  };

  const title: CSSProperties = {
    margin: "0 0 8px 0",
    color: "var(--accent)",
    fontWeight: 800,
  };

  const title2: CSSProperties = {
    margin: "1 0 8px 0",
    color: "purple",
    fontWeight: 800,
  };

  const card2: CSSProperties = {
    border: "3px solid var(--border)",
    background: "var(--card)",
    borderRadius: 12,
    padding: 24,
  };

  return (
    <div style={card}>
      <h3 style={title}>Inline styles</h3>
      <p style={{ margin: 0, color: "var(--muted)" }}>
        Estilos como objetos JS dentro del componente. Útil para valores
        dinámicos pero sin soporte de pseudo-clases (<code>:hover</code>) ni
        media queries.
      </p>
      <div style={card2}>
        <h3 style={title2}>Cubos</h3>
        <p
          style={{
            margin: 14,
            color: "lightgreen",
            backgroundColor: "lightsalmon",
            borderRadius: 8,
          }}
        >
          Los cubos tienen 6 caras, la cara de arriba, de abajo, de derecha, de
          izquierda, de arriba y de abajo
        </p>
      </div>
    </div>
  );
}
