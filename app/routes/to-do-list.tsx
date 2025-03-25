import { ToDoList } from "../pages/to-do-list";

export function meta() {
  return [
    { title: "To-Do-List" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <ToDoList
      title="Forest Stuff To Do"
      initialItems={[{ isComplete: true, description: "Eat Lunch" }]}
    />
  );
}
