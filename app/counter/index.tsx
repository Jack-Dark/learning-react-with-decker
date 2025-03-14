import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setCount(count - 1);
            // setCount(prevCount => prevCount - 1)
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
            // setCount(prevCount => prevCount + 1)
          }}
        >
          +1
        </button>

        <p>Current count: {count}</p>
      </div>
    </>
  );
};
