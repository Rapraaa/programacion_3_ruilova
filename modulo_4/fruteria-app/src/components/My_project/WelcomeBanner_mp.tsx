export interface WelcomeBannerProps {
  subtitle?: string;
}

export default function WelcomeBanner_mp({ subtitle }: WelcomeBannerProps) {
  return (
    <div
      style={{
        background: "#0f766e",
        color: "#fff",
        padding: "16px 24px",
        borderRadius: 8,
      }}
    >
      <h1 style={{ margin: 0, fontSize: 32 }}>Clinica Veterinaria UTE</h1>
      <p style={{ margin: "6px 0 0", opacity: 0.85 }}>
        Sistema de atencion de mascotas <br />
        {subtitle ?? "Programacion 3"}
      </p>
    </div>
  );
}
