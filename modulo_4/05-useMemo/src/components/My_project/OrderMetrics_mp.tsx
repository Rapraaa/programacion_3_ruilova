import { useState, useMemo } from "react";

interface Consulta {
  id: number;
  mascota: string;
  especie: string;
  total: number;
  pagada: boolean;
}

const CONSULTAS: Consulta[] = [
  { id: 1, mascota: "Rex", especie: "Perro", total: 45, pagada: true },
  { id: 2, mascota: "Michi", especie: "Gato", total: 20, pagada: false },
  { id: 3, mascota: "Lola", especie: "Conejo", total: 12, pagada: true },
  { id: 4, mascota: "Toby", especie: "Perro", total: 120, pagada: true },
  { id: 5, mascota: "Nina", especie: "Gato", total: 35, pagada: false },
  { id: 6, mascota: "Kira", especie: "Perro", total: 80, pagada: true },
];

export default function OrderMetrics_mp() {
  const [especie, setEspecie] = useState("Todas");

  const especies = useMemo(
    () => ["Todas", ...new Set(CONSULTAS.map((c) => c.especie))],
    [],
  );

  const filtradas = useMemo(
    () =>
      especie === "Todas"
        ? CONSULTAS
        : CONSULTAS.filter((c) => c.especie === especie),
    [especie],
  );

  const totalFacturado = useMemo(
    () => filtradas.reduce((acc, c) => acc + c.total, 0),
    [filtradas],
  );

  const promedio = useMemo(
    () => (filtradas.length > 0 ? totalFacturado / filtradas.length : 0),
    [filtradas, totalFacturado],
  );

  const pendientesDePago = useMemo(
    () => filtradas.filter((c) => !c.pagada).length,
    [filtradas],
  );

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 520, margin: "0 auto", padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
        Metricas de consultas
      </h2>
      <p style={{ color: "#666", fontSize: 14, marginBottom: 20 }}>
        Todas las metricas se derivan del mismo filtro memoizado.
      </p>

      <select
        value={especie}
        onChange={(e) => setEspecie(e.target.value)}
        style={{ padding: "8px 12px", border: "1px solid #d1d5db", borderRadius: 6, marginBottom: 20 }}
      >
        {especies.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
        {[
          { label: "Consultas", value: filtradas.length },
          { label: "Total facturado", value: `$${totalFacturado.toFixed(2)}` },
          { label: "Promedio por consulta", value: `$${promedio.toFixed(2)}` },
          { label: "Pendientes de pago", value: pendientesDePago },
        ].map(({ label, value }) => (
          <div key={label} style={{ padding: 14, background: "#f5f5f5", borderRadius: 8 }}>
            <div style={{ color: "#888", fontSize: 13, marginBottom: 4 }}>{label}</div>
            <div style={{ fontWeight: 700, fontSize: 20 }}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
