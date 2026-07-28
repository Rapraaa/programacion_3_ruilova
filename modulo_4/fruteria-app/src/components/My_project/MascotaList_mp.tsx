interface Mascota {
  nombre: string;
  especie: string;
  peso: number;
  internada?: boolean;
}

interface MascotaListProps {
  mascotas: Mascota[];
  title?: string;
}

export default function MascotaList_mp({
  mascotas,
  title = "Mascotas",
}: MascotaListProps) {
  if (mascotas.length === 0) {
    return <p style={{ color: "#999" }}>No hay mascotas registradas.</p>;
  }

  const ordenadas = [...mascotas].sort((a, b) => b.peso - a.peso);

  return (
    <div>
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {ordenadas.map((mascota) => (
          <li
            key={mascota.nombre}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <span>
              {mascota.internada && "[Internada] "}
              {mascota.nombre} - {mascota.especie}
            </span>
            <span style={{ color: "#888", fontSize: 13 }}>
              {mascota.peso} kg
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
