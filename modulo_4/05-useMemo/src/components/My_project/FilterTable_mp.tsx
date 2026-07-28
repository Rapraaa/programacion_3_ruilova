import { useState, useMemo } from "react";

interface Historia {
  id: number;
  mascota: string;
  especie: string;
  motivo: string;
  peso: number;
}

const HISTORIAS: Historia[] = [
  { id: 1, mascota: "Rex", especie: "Perro", motivo: "Fractura", peso: 24.5 },
  { id: 2, mascota: "Michi", especie: "Gato", motivo: "Vacunacion", peso: 4.2 },
  { id: 3, mascota: "Lola", especie: "Conejo", motivo: "Control", peso: 1.8 },
  { id: 4, mascota: "Toby", especie: "Perro", motivo: "Esterilizacion", peso: 18.3 },
  { id: 5, mascota: "Nina", especie: "Gato", motivo: "Alergia", peso: 3.9 },
  { id: 6, mascota: "Kira", especie: "Perro", motivo: "Vacunacion", peso: 30.1 },
];

type Columna = "mascota" | "especie" | "motivo" | "peso";

export default function FilterTable_mp() {
  const [busqueda, setBusqueda] = useState("");
  const [columna, setColumna] = useState<Columna>("mascota");
  const [ascendente, setAscendente] = useState(true);

  const filtradas = useMemo(() => {
    const texto = busqueda.toLowerCase().trim();
    if (!texto) return HISTORIAS;
    return HISTORIAS.filter(
      (h) =>
        h.mascota.toLowerCase().includes(texto) ||
        h.especie.toLowerCase().includes(texto) ||
        h.motivo.toLowerCase().includes(texto),
    );
  }, [busqueda]);

  const ordenadas = useMemo(() => {
    const copia = [...filtradas];
    copia.sort((a, b) => {
      const valorA = a[columna];
      const valorB = b[columna];

      if (typeof valorA === "number" && typeof valorB === "number") {
        return ascendente ? valorA - valorB : valorB - valorA;
      }

      return ascendente
        ? String(valorA).localeCompare(String(valorB))
        : String(valorB).localeCompare(String(valorA));
    });
    return copia;
  }, [filtradas, columna, ascendente]);

  function ordenarPor(col: Columna) {
    if (col === columna) {
      setAscendente((prev) => !prev);
      return;
    }
    setColumna(col);
    setAscendente(true);
  }

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 560, margin: "0 auto", padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
        Historias clinicas
      </h2>
      <p style={{ color: "#666", fontSize: 14, marginBottom: 20 }}>
        Haz click en la cabecera para ordenar la tabla.
      </p>

      <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar por mascota, especie o motivo"
        style={{
          width: "100%",
          padding: "8px 12px",
          border: "1px solid #d1d5db",
          borderRadius: 6,
          marginBottom: 16,
          boxSizing: "border-box",
        }}
      />

      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ background: "#0f766e", color: "#fff" }}>
            {(["mascota", "especie", "motivo", "peso"] as Columna[]).map((col) => (
              <th
                key={col}
                onClick={() => ordenarPor(col)}
                style={{ padding: "9px 12px", textAlign: "left", cursor: "pointer" }}
              >
                {col} {columna === col ? (ascendente ? "^" : "v") : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ordenadas.map((historia) => (
            <tr key={historia.id} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "9px 12px" }}>{historia.mascota}</td>
              <td style={{ padding: "9px 12px" }}>{historia.especie}</td>
              <td style={{ padding: "9px 12px" }}>{historia.motivo}</td>
              <td style={{ padding: "9px 12px" }}>{historia.peso} kg</td>
            </tr>
          ))}
        </tbody>
      </table>

      {ordenadas.length === 0 && (
        <p style={{ color: "#9ca3af", marginTop: 12 }}>Sin resultados.</p>
      )}
    </div>
  );
}
