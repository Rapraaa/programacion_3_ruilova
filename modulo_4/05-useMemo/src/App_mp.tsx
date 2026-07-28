import PrimeSieve_mp from "./components/My_project/PrimeSieve_mp";
import FilteredCatalog_mp from "./components/My_project/FilteredCatalog_mp";
import OrderMetrics_mp from "./components/My_project/OrderMetrics_mp";
import MultiTagFilter_mp from "./components/My_project/MultiTagFilter_mp";
import MemoizedList_mp from "./components/My_project/MemoizedList_mp";
import FilterTable_mp from "./components/My_project/FilterTable_mp";
import PaginatedFetch_mp from "./components/My_project/PaginatedFetch_mp";

const PASO = 1;

export default function App_mp() {
  const content =
    PASO === 1 ? (
      <PrimeSieve_mp />
    ) : PASO === 2 ? (
      <FilteredCatalog_mp />
    ) : PASO === 3 ? (
      <OrderMetrics_mp />
    ) : PASO === 4 ? (
      <MultiTagFilter_mp />
    ) : PASO === 5 ? (
      <MemoizedList_mp />
    ) : PASO === 6 ? (
      <FilterTable_mp />
    ) : PASO === 7 ? (
      <PaginatedFetch_mp />
    ) : (
      <p style={{ color: "#e00" }}>Paso {PASO}: crea el componente primero</p>
    );

  return (
    <main
      style={{
        maxWidth: 620,
        margin: "40px auto",
        fontFamily: "sans-serif",
        padding: "0 16px",
      }}
    >
      <h2>Clinica Veterinaria UTE</h2>
      {content}
    </main>
  );
}
