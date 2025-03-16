export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <ul>
      <li>
        <a href="/welcome">Welcome</a>
      </li>
      <li>
        <a href="/counter">Counter</a>
      </li>
    </ul>
  );
}
