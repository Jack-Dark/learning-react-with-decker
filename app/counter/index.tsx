import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div className="grid max-w-lg grid-cols-2 gap-4 p-4">
        <div className="col-span-2">
          <p>Current count: {count}</p>
        </div>

        <button
          className="btn cursor-pointer bg-red-400 px-3 py-2"
          onClick={() => {
            setCount(count - 1);
            // setCount(prevCount => prevCount - 1);
          }}
        >
          -1
        </button>
        <button
          className="btn cursor-pointer bg-emerald-600 px-3 py-2"
          onClick={() => {
            setCount(count + 1);
            // setCount(prevCount => prevCount + 1);
          }}
        >
          +1
        </button>
      </div>
    </>
  );
};
