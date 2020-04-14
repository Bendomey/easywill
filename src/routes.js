import { lazy } from "react";
const Overview = lazy(() => import("./pages/overview/index"));
const Members = lazy(() => import("./pages/members/index"));
const SingleMember = lazy(() => import("./pages/members/single"));
const FAQS = lazy(() => import("./pages/faqs/index"));
export default [
  { name: "Overview", path: "/", component: Overview, exact: true },
  { name: "Members", path: "/members", exact: true, component: Members },
  {
    name: "Members",
    path: "/members/:id",
    exact: true,
    component: SingleMember,
  },
  { name: "FAQS", path: "/faqs", exact: true, component: FAQS },
];
