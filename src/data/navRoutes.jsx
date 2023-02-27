import { lazy } from "react";

const Overview = lazy(() => import("../features/Charts"));
const Charts = lazy(() => import("../features/Overview"));

const navRoutes = [
  {
    path: "/dashboard/overview",
    component: Overview,
  },
  {
    path: "/dashboard/charts",
    component: Charts,
  },
];

export default navRoutes;
