import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("welcome", "routes/welcome.tsx"),
  route("counter", "routes/counter.tsx"),
] satisfies RouteConfig;
