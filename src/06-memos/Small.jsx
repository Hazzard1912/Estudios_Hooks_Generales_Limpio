// import { memo } from "react";
import React from "react";

export const Small = React.memo(({ counter }) => {
  console.log("Me volvi a generar");

  return <small>{counter}</small>;
});

Small.displayName = "Small";
