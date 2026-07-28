interface TableRow {
  jaula: string;
  ocupante: string;
  dias: number;
  value: string | number;
  highlight?: boolean;
}

interface JaulasTableProps {
  title?: string;
  rows: TableRow[];
}

export default function JaulasTable_mp({ title, rows }: JaulasTableProps) {
  return (
    <div style={{ maxWidth: 420 }}>
      {title && <h3 style={{ marginBottom: 8, fontSize: 15 }}>{title}</h3>}
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.jaula}
              style={{ backgroundColor: row.highlight ? "#ccfbf1" : "transparent" }}
            >
              <td style={celda("45%")}>{row.jaula}</td>
              <td style={celda("30%")}>{row.ocupante}</td>
              <td style={{ ...celda("20%"), fontWeight: row.highlight ? 600 : 400 }}>
                {row.dias} dias
              </td>
              <td style={{ ...celda(), fontWeight: row.highlight ? 600 : 400 }}>
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function celda(width?: string) {
  return {
    padding: "8px 12px",
    borderBottom: "1px solid #e5e7eb",
    color: "#6b7280",
    width,
  };
}
