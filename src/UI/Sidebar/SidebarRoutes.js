import {
  IconApiApp,
  IconChartBar,
  IconDatabase,
  IconFileInvoice,
  IconLayoutDashboard,
  IconLogout,
  IconSettings,
  IconShare,
} from "@tabler/icons-react";

const SidebarRoutes = [
  {
    path: "/dashboard/overview",
    name: "Overview",
    icon: <IconLayoutDashboard className="h-6 w-6" />,
  },
  {
    path: "/dashboard/charts",
    name: "Charts",
    icon: <IconChartBar className="h-6 w-6" />,
  },
  {
    path: "/dashboard/invoices",
    name: "Invoices",
    icon: <IconDatabase className="h-6 w-6" />,
  },
  {
    path: "/dashboard/connections",
    name: "Integrations",
    icon: <IconShare className="h-6 w-6" />,
  },
  {
    path: "/dashboard/workflows",
    name: "Workflows",
    icon: <IconApiApp className="h-6 w-6" />,
  },
  // {
  //   path: "/dashboard/billing",
  //   name: "Billing",
  //   icon: <IconFileInvoice className="h-6 w-6" />,
  // },
  {
    path: "/dashboard/settings",
    name: "Settings",
    icon: <IconSettings className="h-6 w-6" />,
  },
  {
    path: "/",
    name: "Logout",
    icon: <IconLogout className="h-6 w-6" />,
  },
];

export default SidebarRoutes;
