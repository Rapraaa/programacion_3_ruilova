type EstadoPaciente = "sana" | "control" | "internada" | "urgencia";

interface StatusBadgeProps {
  estado: EstadoPaciente;
  label?: string;
}

export default function StatusBadge_mp({ estado, label }: StatusBadgeProps) {
  const config: Record<EstadoPaciente, { bg: string; color: string; text: string }> = {
    sana: { bg: "#dcfce7", color: "#166534", text: "Sana" },
    control: { bg: "#fef9c3", color: "#854d0e", text: "En control" },
    internada: { bg: "#f3f4f6", color: "#6b7280", text: "Internada" },
    urgencia: { bg: "#fee2e2", color: "#991b1b", text: "Urgencia" },
  };

  const { bg, color, text } = config[estado];

  return (
    <span
      style={{
        backgroundColor: bg,
        color,
        padding: "3px 10px",
        borderRadius: 12,
        fontSize: 12,
        fontWeight: 600,
        display: "inline-block",
      }}
    >
      {label ?? text}
    </span>
  );
}
