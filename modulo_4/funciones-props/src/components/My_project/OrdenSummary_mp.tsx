interface ServicioEnOrden {
  id: number;
  nombre: string;
  precio: number;
}

interface OrdenSummaryProps {
  items: ServicioEnOrden[];
  onVaciar: () => void;
}

export default function OrdenSummary_mp({ items, onVaciar }: OrdenSummaryProps) {
  const total = items.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 10,
        padding: 16,
        marginTop: 24,
      }}
    >
      <h3 style={{ marginTop: 0 }}>Orden de atencion ({items.length})</h3>

      {items.length === 0 && (
        <p style={{ color: "#999" }}>Todavia no hay servicios en la orden.</p>
      )}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "6px 0",
            }}
          >
            <span>{item.nombre}</span>
            <span>${item.precio.toFixed(2)}</span>
          </li>
        ))}
      </ul>

      {items.length > 0 && (
        <>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={onVaciar}
            style={{
              marginTop: 12,
              backgroundColor: "#e00",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "8px 16px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Vaciar orden
          </button>
        </>
      )}
    </div>
  );
}
