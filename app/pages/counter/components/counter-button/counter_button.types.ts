import type { PropsWithChildren } from "react";

export type CounterButtonPropsDef = PropsWithChildren<{
  setCount: React.Dispatch<React.SetStateAction<number>>;
  backgroundColor: string;
  changeValue: number;
}>;
