type Moneda = "USD" | "EUR";

interface PriceTagProps {
  monto: number;
  moneda?: Moneda;
  descuento?: number;
}

export default function PriceTag_mp({
  monto,
  moneda = "USD",
  descuento = 0,
}: PriceTagProps) {
  const hayDescuento = descuento > 0;
  const precioFinal = hayDescuento ? monto * (1 - descuento / 100) : monto;

  const simbolos: Record<Moneda, string> = {
    USD: "$",
    EUR: "€",
  };

  const simbolo = simbolos[moneda];

  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      {hayDescuento && (
        <span style={{ fontSize: 13, color: "#aaa", textDecoration: "line-through" }}>
          {simbolo}
          {monto.toFixed(2)}
        </span>
      )}
      <span
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: hayDescuento ? "#e00" : "#333",
        }}
      >
        {simbolo}
        {precioFinal.toFixed(2)} {moneda}
      </span>
      {hayDescuento && (
        <span style={{ fontSize: 12, color: "#22c55e", fontWeight: 500 }}>
          {descuento}% por cliente frecuente
        </span>
      )}
    </div>
  );
}
