import { useState } from "react";
import { CounterButton } from "./components/counter-button";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const getCountColor = (count: number) => {
    if (count < 0) {
      return "text-red-400";
    }
    if (count > 0) {
      return "text-emerald-600";
    }
    return "text-white";
  };

  return (
    <>
      <div className="grid max-w-lg grid-cols-2 gap-4 p-4">
        <div className="col-span-2">
          <p>
            Current count: <span className={getCountColor(count)}>{count}</span>
          </p>
        </div>
        <CounterButton
          setCount={setCount}
          backgroundColor="bg-red-400"
          changeValue={-1}
        >
          -1
        </CounterButton>
        <CounterButton
          setCount={setCount}
          backgroundColor="bg-emerald-600"
          changeValue={1}
        >
          +1
        </CounterButton>
      </div>
    </>
  );
};
