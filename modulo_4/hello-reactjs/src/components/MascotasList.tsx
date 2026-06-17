// src/components/ProductCatalogList.tsx

export interface Mascota {
  id: number;
  name: string;
  tipo: string;
  edad?: number;
  price?: number;
}

interface MascotasListProps {
  mascotas: Mascota[];
  title?: string;
}

export default function MascotasList({
  mascotas,
  title = "Catálogo",
}: MascotasListProps) {
  return (
    <section>
      <h2 style={{ marginBottom: 16 }}>{title}</h2>

      {mascotas.length === 0 && (
        <p style={{ color: "#999" }}>No hay mascotas disponibles.</p>
      )}

      <ul style={{ listStyle: "disc", padding: 0 }}>
        {mascotas.map((product) => (
          <li
            key={product.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 0",
              borderBottom: "1px solid #eee",
              opacity: product.price ? 1 : 0.4,
            }}
          >
            <span>
              {product.name}
              {product.price === undefined && (
                <em style={{ marginLeft: 8, fontSize: 12, color: "#e00" }}>
                  Sin precio
                </em>
              )}
              {product.tipo && (
                <span style={{ marginLeft: 8, fontSize: 12, color: "purple" }}>
                  {product.tipo}
                </span>
              )}
              {product.edad && (
                <span style={{ marginLeft: 8, fontSize: 12, color: "green" }}>
                  edad: {product.edad}
                </span>
              )}
            </span>
            <strong>${product.price.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}
