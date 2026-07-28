import { useReducer, useMemo } from "react";

interface ServicioEnOrden {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

interface OrdenState {
  items: ServicioEnOrden[];
  abierta: boolean;
}

type OrdenAction =
  | { type: "AGREGAR"; servicio: Omit<ServicioEnOrden, "cantidad"> }
  | { type: "QUITAR"; id: number }
  | { type: "INCREMENTAR"; id: number }
  | { type: "DECREMENTAR"; id: number }
  | { type: "VACIAR" }
  | { type: "TOGGLE" };

function ordenReducer(state: OrdenState, action: OrdenAction): OrdenState {
  switch (action.type) {
    case "AGREGAR": {
      const existe = state.items.find((i) => i.id === action.servicio.id);
      if (existe) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.servicio.id ? { ...i, cantidad: i.cantidad + 1 } : i,
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.servicio, cantidad: 1 }],
      };
    }
    case "QUITAR":
      return { ...state, items: state.items.filter((i) => i.id !== action.id) };
    case "INCREMENTAR":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, cantidad: i.cantidad + 1 } : i,
        ),
      };
    case "DECREMENTAR":
      return {
        ...state,
        items: state.items
          .map((i) => (i.id === action.id ? { ...i, cantidad: i.cantidad - 1 } : i))
          .filter((i) => i.cantidad > 0),
      };
    case "VACIAR":
      return { ...state, items: [] };
    case "TOGGLE":
      return { ...state, abierta: !state.abierta };
  }
}

const SERVICIOS = [
  { id: 1, nombre: "Consulta general", precio: 20 },
  { id: 2, nombre: "Vacuna antirrabica", precio: 15 },
  { id: 3, nombre: "Desparasitacion", precio: 12 },
  { id: 4, nombre: "Baño y peluqueria", precio: 25 },
];

export default function ShoppingCart_mp() {
  const [orden, dispatch] = useReducer(ordenReducer, {
    items: [],
    abierta: false,
  });

  const total = useMemo(
    () => orden.items.reduce((acc, i) => acc + i.precio * i.cantidad, 0),
    [orden.items],
  );

  const cantidadServicios = useMemo(
    () => orden.items.reduce((acc, i) => acc + i.cantidad, 0),
    [orden.items],
  );

  return (
    <div style={{ maxWidth: 440, fontFamily: "sans-serif" }}>
      <div style={{ marginBottom: 16 }}>
        {SERVICIOS.map((servicio) => (
          <div
            key={servicio.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 0",
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            <div>
              <p style={{ margin: 0, fontWeight: 500 }}>{servicio.nombre}</p>
              <p style={{ margin: 0, fontSize: 13, color: "#6b7280" }}>
                ${servicio.precio}
              </p>
            </div>
            <button
              onClick={() => dispatch({ type: "AGREGAR", servicio })}
              style={{
                padding: "6px 14px",
                background: "#0f766e",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              + Agregar
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => dispatch({ type: "TOGGLE" })}
        style={{
          width: "100%",
          padding: "10px",
          background: cantidadServicios > 0 ? "#0f766e" : "#f3f4f6",
          color: cantidadServicios > 0 ? "#fff" : "#6b7280",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          fontWeight: 600,
          marginBottom: 12,
        }}
      >
        {orden.abierta
          ? "Ocultar orden"
          : `Ver orden de atencion (${cantidadServicios})`}
      </button>

      {orden.abierta && (
        <div style={{ border: "1px solid #e5e7eb", borderRadius: 10, padding: 16 }}>
          {orden.items.length === 0 ? (
            <p style={{ color: "#9ca3af", margin: 0 }}>
              La orden esta vacia.
            </p>
          ) : (
            <>
              {orden.items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px 0",
                    borderBottom: "1px solid #f3f4f6",
                  }}
                >
                  <span style={{ fontSize: 14, flex: 1 }}>{item.nombre}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <button
                      onClick={() => dispatch({ type: "DECREMENTAR", id: item.id })}
                      style={qtyBtn}
                    >
                      -
                    </button>
                    <span style={{ minWidth: 20, textAlign: "center", fontSize: 14 }}>
                      {item.cantidad}
                    </span>
                    <button
                      onClick={() => dispatch({ type: "INCREMENTAR", id: item.id })}
                      style={qtyBtn}
                    >
                      +
                    </button>
                    <span style={{ minWidth: 60, textAlign: "right", fontSize: 14 }}>
                      ${(item.precio * item.cantidad).toFixed(2)}
                    </span>
                    <button
                      onClick={() => dispatch({ type: "QUITAR", id: item.id })}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#ef4444",
                      }}
                    >
                      X
                    </button>
                  </div>
                </div>
              ))}

              <div
                style={{
                  paddingTop: 12,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: 600 }}>Total a pagar</span>
                <span style={{ fontWeight: 700, fontSize: 16 }}>
                  ${total.toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => dispatch({ type: "VACIAR" })}
                style={{
                  marginTop: 12,
                  width: "100%",
                  padding: "8px",
                  background: "#fee2e2",
                  color: "#991b1b",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                }}
              >
                Vaciar orden
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

const qtyBtn: React.CSSProperties = {
  width: 24,
  height: 24,
  border: "1px solid #d1d5db",
  borderRadius: 4,
  background: "#f9fafb",
  cursor: "pointer",
  fontSize: 14,
  lineHeight: 1,
};
