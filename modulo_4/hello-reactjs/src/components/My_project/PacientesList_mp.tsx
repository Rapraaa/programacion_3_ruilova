export interface Paciente {
  id: number;
  nombre: string;
  especie: string;
  edad?: number;
  peso?: number;
}

interface PacientesListProps {
  pacientes: Paciente[];
  title?: string;
}

export default function PacientesList_mp({
  pacientes,
  title = "Pacientes",
}: PacientesListProps) {
  return (
    <section>
      <h2 style={{ marginBottom: 16 }}>{title}</h2>

      {pacientes.length === 0 && (
        <p style={{ color: "#999" }}>No hay pacientes registrados.</p>
      )}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {pacientes.map((paciente) => (
          <li
            key={paciente.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 0",
              borderBottom: "1px solid #eee",
              opacity: paciente.peso ? 1 : 0.4,
            }}
          >
            <span>
              {paciente.nombre}
              <span style={{ marginLeft: 8, fontSize: 12, color: "#0f766e" }}>
                {paciente.especie}
              </span>
              {paciente.edad && (
                <span style={{ marginLeft: 8, fontSize: 12, color: "green" }}>
                  {paciente.edad} años
                </span>
              )}
              {paciente.peso === undefined && (
                <em style={{ marginLeft: 8, fontSize: 12, color: "#e00" }}>
                  Falta pesar
                </em>
              )}
            </span>
            <strong>{paciente.peso ? `${paciente.peso.toFixed(2)} kg` : "--"}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}
