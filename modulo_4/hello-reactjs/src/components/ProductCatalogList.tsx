// src/components/ProductCatalogList.tsx

export interface Product {
  id: number;
  name: string;
  price: number;
  outOfStock?: boolean;
  category?: string;
}

interface ProductCatalogListProps {
  products: Product[];
  title?: string;
}

export default function ProductCatalogList({
  products,
  title = "Catálogo",
}: ProductCatalogListProps) {
  return (
    <section>
      <h2 style={{ marginBottom: 16 }}>{title}</h2>

      {products.length === 0 && (
        <p style={{ color: "#999" }}>No hay productos disponibles.</p>
      )}

      <ul style={{ listStyle: "disc", padding: 0 }}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 0",
              borderBottom: "1px solid #eee",
              opacity: product.outOfStock ? 0.4 : 1,
            }}
          >
            <span>
              {product.name}
              {product.outOfStock && (
                <em style={{ marginLeft: 8, fontSize: 12, color: "#e00" }}>
                  Agotado
                </em>
              )}
              {product.category && (
                <span style={{ marginLeft: 8, fontSize: 12, color: "#999" }}>
                  {product.category}
                </span>
              )}
            </span>
            <strong>${product.price.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}
