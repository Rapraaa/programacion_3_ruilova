interface ColoredBoxProps {
  color: string;
  width?: number;
  height?: number;
  label?: string;
  borderRadius?: number;
  onClick?: () => void;
}

export default function ColoredBox_mp({
  color,
  width = 80,
  height = 80,
  label,
  borderRadius = 8,
  onClick,
}: ColoredBoxProps) {
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
      }}
    >
      <div
        style={{
          width,
          height,
          backgroundColor: color,
          borderRadius,
          border: "1px solid rgba(0,0,0,0.1)",
          cursor: onClick ? "pointer" : "default",
        }}
        onClick={onClick}
      />
      {label && <span style={{ fontSize: 12, color: "#666" }}>{label}</span>}
    </div>
  );
}
