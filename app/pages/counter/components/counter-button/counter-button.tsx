import type { CounterButtonPropsDef } from "./counter-button.types";

export const CounterButton = (props: CounterButtonPropsDef) => {
  const { setCount, backgroundColor, changeValue } = props;
  return (
    <button
      className={`btn cursor-pointer ${backgroundColor} px-3 py-2`}
      onClick={() => {
        //  setCount(count + 1);
        setCount((prevCount) => prevCount + changeValue);
      }}
    >
      {changeValue > 0 ? `+${changeValue}` : changeValue}
    </button>
  );
};
