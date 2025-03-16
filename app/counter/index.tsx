import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div className="p-4 grid grid-cols-2 gap-4 max-w-lg">
        <div className="col-span-2">
          <p>Current count: {count}</p>
        </div>

        <button
          className="cursor-pointer btn bg-red-400 px-3 py-2"
          onClick={() => {
            setCount(count - 1);
            // setCount(prevCount => prevCount - 1)
          }}
        >
          -1
        </button>
        <button
          className="cursor-pointer btn bg-green-400 px-3 py-2"
          onClick={() => {
            setCount(count + 1);
            // setCount(prevCount => prevCount + 1)
          }}
        >
          +1
        </button>
      </div>
    </>
  );
};
