import { useState, useMemo } from "react";

interface Servicio {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
}

const SERVICIOS: Servicio[] = [
  { id: 1, nombre: "Consulta general", categoria: "Consulta", precio: 20 },
  { id: 2, nombre: "Consulta de emergencia", categoria: "Consulta", precio: 45 },
  { id: 3, nombre: "Vacuna antirrabica", categoria: "Prevencion", precio: 15 },
  { id: 4, nombre: "Desparasitacion interna", categoria: "Prevencion", precio: 12 },
  { id: 5, nombre: "Esterilizacion", categoria: "Cirugia", precio: 120 },
  { id: 6, nombre: "Limpieza dental", categoria: "Cirugia", precio: 80 },
  { id: 7, nombre: "Baño medicado", categoria: "Estetica", precio: 25 },
  { id: 8, nombre: "Corte de uñas", categoria: "Estetica", precio: 8 },
];

type Orden = "precio-asc" | "precio-desc" | "nombre";

export default function FilteredCatalog_mp() {
  const [busqueda, setBusqueda] = useState("");
  const [orden, setOrden] = useState<Orden>("nombre");

  const filtrados = useMemo(() => {
    const texto = busqueda.toLowerCase().trim();
    if (!texto) return SERVICIOS;
    return SERVICIOS.filter(
      (s) =>
        s.nombre.toLowerCase().includes(texto) ||
        s.categoria.toLowerCase().includes(texto),
    );
  }, [busqueda]);

  const ordenados = useMemo(() => {
    const copia = [...filtrados];
    if (orden === "precio-asc") return copia.sort((a, b) => a.precio - b.precio);
    if (orden === "precio-desc") return copia.sort((a, b) => b.precio - a.precio);
    return copia.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }, [filtrados, orden]);

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 520, margin: "0 auto", padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
        Catalogo de servicios
      </h2>
      <p style={{ color: "#666", fontSize: 14, marginBottom: 20 }}>
        Primero se filtra y despues se ordena, cada paso con su propio useMemo.
      </p>

      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <input
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar servicio o categoria"
          style={{ flex: 1, padding: "8px 12px", border: "1px solid #d1d5db", borderRadius: 6 }}
        />
        <select
          value={orden}
          onChange={(e) => setOrden(e.target.value as Orden)}
          style={{ padding: "8px 12px", border: "1px solid #d1d5db", borderRadius: 6 }}
        >
          <option value="nombre">Nombre</option>
          <option value="precio-asc">Precio menor</option>
          <option value="precio-desc">Precio mayor</option>
        </select>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {ordenados.map((servicio) => (
          <div
            key={servicio.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 14px",
              background: "#fafafa",
              border: "1px solid #e5e5e5",
              borderRadius: 8,
            }}
          >
            <div>
              <p style={{ margin: 0, fontWeight: 500 }}>{servicio.nombre}</p>
              <p style={{ margin: 0, fontSize: 12, color: "#888" }}>
                {servicio.categoria}
              </p>
            </div>
            <span style={{ fontWeight: 700 }}>${servicio.precio}</span>
          </div>
        ))}

        {ordenados.length === 0 && (
          <p style={{ color: "#9ca3af" }}>No hay servicios con ese nombre.</p>
        )}
      </div>
    </div>
  );
}
