import { useState } from "react";

export default function SafeCounter_mp() {
  const [atendidas, setAtendidas] = useState(0);

  function atenderUna() {
    setAtendidas((prev) => prev + 1);
  }

  function atenderTres() {
    setAtendidas((prev) => prev + 1);
    setAtendidas((prev) => prev + 1);
    setAtendidas((prev) => prev + 1);
  }

  return (
    <div>
      <p>Mascotas atendidas: {atendidas}</p>
      <button onClick={atenderUna}>+1</button>
      <button onClick={atenderTres}>+3</button>
    </div>
  );
}
