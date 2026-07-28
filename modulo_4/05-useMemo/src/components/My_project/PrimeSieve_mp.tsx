import { useState, useMemo } from "react";

function generarHistorias(cantidad: number) {
  const especies = ["Perro", "Gato", "Conejo", "Loro"];
  const historias = [];

  for (let i = 1; i <= cantidad; i++) {
    historias.push({
      id: i,
      especie: especies[i % especies.length],
      diasDesdeVacuna: (i * 7) % 400,
    });
  }

  return historias;
}

export default function PrimeSieve_mp() {
  const [cantidad, setCantidad] = useState(10_000);
  const [contador, setContador] = useState(0);

  const historias = useMemo(() => generarHistorias(cantidad), [cantidad]);

  const pendientes = useMemo(
    () => historias.filter((h) => h.diasDesdeVacuna > 365),
    [historias],
  );

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 520, margin: "0 auto", padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
        Vacunas pendientes
      </h2>
      <p style={{ color: "#666", fontSize: 14, marginBottom: 20 }}>
        El contador provoca re-renders pero el recorrido de historias solo corre
        cuando cambia la cantidad.
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 20 }}>
        <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 14 }}>
          Historias clinicas a revisar
          <input
            type="range"
            min={1000}
            max={100_000}
            step={1000}
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
            style={{ width: 200 }}
          />
          <span>{cantidad.toLocaleString()}</span>
        </label>

        <div style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 14 }}>
          Contador
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button onClick={() => setContador((c) => c - 1)} style={{ padding: "4px 12px", cursor: "pointer" }}>
              -
            </button>
            <span style={{ minWidth: 32, textAlign: "center" }}>{contador}</span>
            <button onClick={() => setContador((c) => c + 1)} style={{ padding: "4px 12px", cursor: "pointer" }}>
              +
            </button>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
        {[
          { label: "Historias revisadas", value: historias.length.toLocaleString() },
          { label: "Vacunas vencidas", value: pendientes.length.toLocaleString() },
          {
            label: "Porcentaje",
            value: `${((pendientes.length / historias.length) * 100).toFixed(1)}%`,
          },
        ].map(({ label, value }) => (
          <div key={label} style={{ padding: 12, background: "#f5f5f5", borderRadius: 8, fontSize: 13 }}>
            <div style={{ color: "#888", marginBottom: 4 }}>{label}</div>
            <div style={{ fontWeight: 700, fontSize: 18 }}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
