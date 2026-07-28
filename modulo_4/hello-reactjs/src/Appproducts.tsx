import ProductCatalogList, {
  type Product,
} from "./components/ProductCatalogList";
//import ProductCard from "./components/ProductCard";

const catalog: Product[] = [
  { id: 1, name: "Teclado mecánico", price: 89.99 },
  { id: 2, name: 'Monitor 27"', price: 349.99 },
  { id: 3, name: "Mouse inalámbrico", price: 29.99, outOfStock: false },
  { id: 4, name: "Webcam HD", price: 59.99 },
  { id: 5, name: "skibidi dop dop", price: 1000, category: "computacion" },
];

export default function App() {
  return (
    <main
      style={{ maxWidth: 540, margin: "40px auto", fontFamily: "sans-serif" }}
    >
      <ProductCatalogList products={catalog} title="tecnologia" />
    </main>
  );
}
