import React from "react";

export const ShowIncrement = React.memo(({ increment, decrement }) => {
  console.log("Me volvi a generar...");

  return (
    <>
      <button className="btn btn-primary" onClick={() => increment()}>
        Incrementar
      </button>

      {/* Usando argumentos */}
      <button className="btn btn-primary" onClick={() => decrement(2)}>
        Decrementar
      </button>
    </>
  );
});

ShowIncrement.displayName = "ShowIncrement";
