import { ToDoList } from "~/pages/to-do-list";

export function meta() {
  return [
    { title: "To do List" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <ToDoList
      title="Super cool list"
      initialItems={[{ isComplete: true, description: "code" }]}
    />
  );
}
