import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("welcome", "routes/welcome.tsx"),
  route("counter", "routes/counter.tsx"),
  route("to-do-list", "routes/to-do-list.tsx"),
] satisfies RouteConfig;
