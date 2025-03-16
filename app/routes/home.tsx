export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <ul className="list-inside list-disc p-3">
      <li>
        <a className="underline" href="/welcome">
          Welcome
        </a>
      </li>
      <li>
        <a className="underline" href="/counter">
          Counter
        </a>
      </li>
    </ul>
  );
}
