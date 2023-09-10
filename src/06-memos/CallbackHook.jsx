import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback(() => {
    setCounter((value) => value + 1);
  }, []);

  // Con argumentos
  const decrementFather = useCallback((value) => {
    setCounter((state) => state - value);
  }, []);

  return (
    <>
      <h1>Callback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather} decrement={decrementFather} />
    </>
  );
};
