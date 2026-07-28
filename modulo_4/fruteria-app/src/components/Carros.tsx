// src/components/SimpleInfoTable.tsx

interface TableRow {
  marca: string;
  año: number;
  modelo: string;
  value: string | number;
  highlight?: boolean;
}

interface SimpleInfoTableProps {
  title?: string;
  rows: TableRow[];
}

export default function VehiculosTable({ title, rows }: SimpleInfoTableProps) {
  return (
    <div style={{ maxWidth: 360 }}>
      {title && <h3 style={{ marginBottom: 8, fontSize: 15 }}>{title}</h3>}
      <table
        style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}
      >
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.marca}
              style={{
                backgroundColor: row.highlight ? "#fef9c3" : "transparent",
              }}
            >
              <td
                style={{
                  padding: "8px 12px",
                  borderBottom: "1px solid #e5e7eb",
                  color: "#6b7280",
                  width: "45%",
                }}
              >
                {row.marca}
              </td>
              <td
                style={{
                  padding: "8px 12px",
                  borderBottom: "1px solid #e5e7eb",
                  color: "#6b7280",
                  width: "30%",
                }}
              >
                {row.modelo}
              </td>
              <td
                style={{
                  padding: "8px 12px",
                  borderBottom: "1px solid #e5e7eb",
                  color: "#6b7280",
                  width: "20%",
                  fontWeight: row.highlight ? 600 : 400,
                }}
              >
                {row.año}
              </td>
              <td
                style={{
                  padding: "8px 12px",
                  borderBottom: "1px solid #e5e7eb",
                  color: "#6b7280",
                  fontWeight: row.highlight ? 600 : 400,
                }}
              >
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
