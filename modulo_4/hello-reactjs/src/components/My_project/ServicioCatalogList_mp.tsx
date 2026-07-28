export interface Servicio {
  id: number;
  nombre: string;
  precio: number;
  noDisponible?: boolean;
  categoria?: string;
}

interface ServicioCatalogListProps {
  servicios: Servicio[];
  title?: string;
}

export default function ServicioCatalogList_mp({
  servicios,
  title = "Catalogo",
}: ServicioCatalogListProps) {
  return (
    <section>
      <h2 style={{ marginBottom: 16 }}>{title}</h2>

      {servicios.length === 0 && (
        <p style={{ color: "#999" }}>No hay servicios disponibles.</p>
      )}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {servicios.map((servicio) => (
          <li
            key={servicio.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 0",
              borderBottom: "1px solid #eee",
              opacity: servicio.noDisponible ? 0.4 : 1,
            }}
          >
            <span>
              {servicio.nombre}
              {servicio.noDisponible && (
                <em style={{ marginLeft: 8, fontSize: 12, color: "#e00" }}>
                  No disponible
                </em>
              )}
              {servicio.categoria && (
                <span style={{ marginLeft: 8, fontSize: 12, color: "#999" }}>
                  {servicio.categoria}
                </span>
              )}
            </span>
            <strong>${servicio.precio.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}
