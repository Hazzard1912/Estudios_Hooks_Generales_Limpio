import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ quote, author }) => {
  const paragraphRef = useRef();

  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const { width, height } = paragraphRef.current.getBoundingClientRect();
    setBoxSize({
      width,
      height,
    });
  }, []);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={paragraphRef} className="mb-1">
          {quote}
        </p>
        <footer className="blockquote-footer mt-1">{author}</footer>
      </blockquote>

      <h5>{JSON.stringify(boxSize)}</h5>
    </>
  );
};
