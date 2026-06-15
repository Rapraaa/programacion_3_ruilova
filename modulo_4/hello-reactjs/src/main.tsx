import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MiApp from "./helloreact.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MiApp />
    <App />
  </StrictMode>,
);
