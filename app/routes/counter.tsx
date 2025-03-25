import { Counter } from "~/pages/counter";

export function meta() {
  return [
    { title: "Counter" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Counter />;
}
