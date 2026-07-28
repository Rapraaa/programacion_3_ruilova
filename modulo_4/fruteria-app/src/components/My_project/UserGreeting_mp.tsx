interface UserGreetingProps {
  name: string;
  mascota?: string;
}

export default function UserGreeting_mp({ name, mascota }: UserGreetingProps) {
  const iniciales = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "#0f766e",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 600,
        }}
      >
        {iniciales}
      </div>
      <div>
        <p style={{ margin: 0, fontWeight: 600 }}>Hola, {name}</p>
        {mascota && (
          <p style={{ margin: 0, fontSize: 13, color: "#888" }}>
            Dueño de {mascota}
          </p>
        )}
      </div>
    </div>
  );
}
