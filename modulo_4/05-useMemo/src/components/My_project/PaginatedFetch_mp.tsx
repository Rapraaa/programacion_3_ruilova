import { useState, useEffect, useMemo } from "react";

interface Dueno {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const POR_PAGINA = 3;

export default function PaginatedFetch_mp() {
  const [duenos, setDuenos] = useState<Dueno[]>([]);
  const [pagina, setPagina] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelado = false;

    async function traerDuenos() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`);

        const data: Dueno[] = await res.json();
        if (!cancelado) setDuenos(data);
      } catch (err) {
        if (!cancelado) {
          setError(err instanceof Error ? err.message : "Error desconocido");
        }
      } finally {
        if (!cancelado) setLoading(false);
      }
    }

    traerDuenos();

    return () => {
      cancelado = true;
    };
  }, []);

  const totalPaginas = useMemo(
    () => Math.ceil(duenos.length / POR_PAGINA),
    [duenos],
  );

  const visibles = useMemo(() => {
    const inicio = (pagina - 1) * POR_PAGINA;
    return duenos.slice(inicio, inicio + POR_PAGINA);
  }, [duenos, pagina]);

  if (loading) return <p style={{ color: "#6b7280" }}>Cargando dueños...</p>;
  if (error) return <p style={{ color: "#991b1b" }}>Error: {error}</p>;

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 520, margin: "0 auto", padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
        Dueños registrados
      </h2>
      <p style={{ color: "#666", fontSize: 14, marginBottom: 20 }}>
        La porcion visible se calcula con useMemo cada vez que cambia la pagina.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
        {visibles.map((dueno) => (
          <div
            key={dueno.id}
            style={{
              padding: "10px 14px",
              background: "#fafafa",
              border: "1px solid #e5e5e5",
              borderRadius: 8,
            }}
          >
            <p style={{ margin: 0, fontWeight: 500 }}>{dueno.name}</p>
            <p style={{ margin: 0, fontSize: 12, color: "#888" }}>
              {dueno.email} - {dueno.phone}
            </p>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <button
          onClick={() => setPagina((p) => Math.max(1, p - 1))}
          disabled={pagina === 1}
          style={{ padding: "6px 14px", borderRadius: 6, border: "1px solid #ccc", cursor: "pointer" }}
        >
          Anterior
        </button>
        <span style={{ fontSize: 14 }}>
          Pagina {pagina} de {totalPaginas}
        </span>
        <button
          onClick={() => setPagina((p) => Math.min(totalPaginas, p + 1))}
          disabled={pagina === totalPaginas}
          style={{ padding: "6px 14px", borderRadius: 6, border: "1px solid #ccc", cursor: "pointer" }}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
