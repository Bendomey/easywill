import { lazy } from "react";
const Overview = lazy(() => import("./pages/overview/index"));
const Members = lazy(() => import("./pages/members/index"));

export default [
  { name: "Overview", path: "/", component: Overview, exact: true },
  { name: "Members", path: "/members", exact: true, component: Members },
];
