import type { CounterButtonPropsDef } from "./CounterButtonPropsDef";

export const CounterButton = (props: CounterButtonPropsDef) => {
  const { setCount, backgroundColor, children, changeValue } = props;
  return (
    <button
      className={`btn cursor-pointer ${backgroundColor} py-2" px-3`}
      onClick={() => {
        //  setCount(count + 1);
        setCount((prevCount) => prevCount + changeValue);
      }}
    >
      {children}
    </button>
  );
};
