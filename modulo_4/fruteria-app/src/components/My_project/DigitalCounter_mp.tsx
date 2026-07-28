import { useState } from "react";

interface DigitalCounterProps {
  initialValue?: number;
  step?: number;
  label?: string;
}

export default function DigitalCounter_mp({
  initialValue = 0,
  step = 1,
  label = "Mascotas atendidas hoy",
}: DigitalCounterProps) {
  const [contador, setContador] = useState(initialValue);

  function aumentar() {
    setContador(contador + step);
  }

  function disminuir() {
    setContador(contador - step);
  }

  function reset() {
    setContador(initialValue);
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{ fontSize: 14, color: "#666" }}>{label}</span>
      <button onClick={disminuir} style={btnStyle}>
        -
      </button>
      <span style={{ fontSize: 20, fontWeight: 600, minWidth: 40, textAlign: "center" }}>
        {contador}
      </span>
      <button onClick={aumentar} style={btnStyle}>
        +
      </button>
      <button onClick={reset} style={{ ...btnStyle, fontSize: 12, color: "#999" }}>
        Reset
      </button>
    </div>
  );
}

const btnStyle = {
  width: 32,
  height: 32,
  borderRadius: 6,
  border: "1px solid #ddd",
  background: "#f5f5f5",
  cursor: "pointer",
  fontSize: 16,
};
