interface CatalogServicioItemProps {
  id: number;
  nombre: string;
  precio: number;
  onAgregar: (id: number, nombre: string, precio: number) => void;
}

export default function CatalogServicioItem_mp({
  id,
  nombre,
  precio,
  onAgregar,
}: CatalogServicioItemProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 0",
        borderBottom: "1px solid #eee",
      }}
    >
      <div>
        <p style={{ margin: 0, fontWeight: 500 }}>{nombre}</p>
        <p style={{ margin: 0, fontSize: 13, color: "#888" }}>
          ${precio.toFixed(2)}
        </p>
      </div>
      <button
        onClick={() => onAgregar(id, nombre, precio)}
        style={{
          backgroundColor: "#0f766e",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          padding: "6px 14px",
          cursor: "pointer",
        }}
      >
        + Agregar
      </button>
    </div>
  );
}
