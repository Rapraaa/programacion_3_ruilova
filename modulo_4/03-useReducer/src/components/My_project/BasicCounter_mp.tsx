import { useReducer } from "react";

type TurnoAction =
  | { type: "SIGUIENTE" }
  | { type: "ANTERIOR" }
  | { type: "RESET" }
  | { type: "SET"; payload: number };

interface TurnoState {
  turno: number;
}

function turnoReducer(state: TurnoState, action: TurnoAction): TurnoState {
  switch (action.type) {
    case "SIGUIENTE":
      return { turno: state.turno + 1 };
    case "ANTERIOR":
      return { turno: state.turno - 1 };
    case "RESET":
      return { turno: 0 };
    case "SET":
      return { turno: action.payload };
  }
}

const INITIAL_STATE: TurnoState = { turno: 0 };

export default function BasicCounter_mp() {
  const [state, dispatch] = useReducer(turnoReducer, INITIAL_STATE);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 220 }}>
      <p style={{ margin: 0, fontSize: 14, color: "#6b7280", textAlign: "center" }}>
        Turno en atencion
      </p>
      <p style={{ fontFamily: "monospace", fontSize: 32, margin: 0, textAlign: "center" }}>
        {state.turno}
      </p>
      <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
        <button onClick={() => dispatch({ type: "ANTERIOR" })} style={btnStyle}>
          -
        </button>
        <button onClick={() => dispatch({ type: "SIGUIENTE" })} style={btnStyle}>
          +
        </button>
      </div>
      <button
        onClick={() => dispatch({ type: "SET", payload: 50 })}
        style={{ ...btnStyle, fontSize: 12 }}
      >
        Saltar al turno 50
      </button>
      <button
        onClick={() => dispatch({ type: "RESET" })}
        style={{ ...btnStyle, background: "#f3f4f6", color: "#6b7280" }}
      >
        Reset
      </button>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  padding: "8px 16px",
  border: "none",
  borderRadius: 6,
  background: "#0f766e",
  color: "#fff",
  cursor: "pointer",
  fontWeight: 500,
};
