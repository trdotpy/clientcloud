import {
  IconApiApp,
  IconChartBar,
  IconDatabase,
  IconFileInvoice,
  IconHelp,
  IconLayoutDashboard,
  IconLayoutKanban,
  IconLogout,
  IconSettings,
  IconShare,
  IconUserCircle,
  IconUsers,
} from "@tabler/icons-react";

const SidebarRoutes = [
  {
    path: "/dashboard/overview",
    name: "Overview",
    icon: <IconLayoutDashboard className="h-5 w-5" />,
  },
  {
    path: "/dashboard/charts",
    name: "Charts",
    icon: <IconChartBar className="h-5 w-5" />,
  },
  {
    path: "/dashboard/invoices",
    name: "Invoices",
    icon: <IconDatabase className="h-5 w-5" />,
  },
  {
    path: "/dashboard/connections",
    name: "Integrations",
    icon: <IconShare className="h-5 w-5" />,
  },
  {
    path: "/dashboard/workflows",
    name: "Workflows",
    icon: <IconApiApp className="h-5 w-5" />,
    dropdown: [
      {
        path: "/dashboard/projects",
        name: "Projects",
        icon: <IconLayoutKanban className="h-5 w-5" />,
      },
      {
        path: "/dashboard/teams",
        name: "Teams",
        icon: <IconUsers className="h-5 w-5" />,
      },
    ],
  },
  {
    path: "/dashboard/account",
    name: "Account",
    icon: <IconUserCircle className="inline h-5 w-5" />,
    dropdown: [
      {
        path: "/dashboard/billing",
        name: "Billing",
        icon: <IconFileInvoice className="h-5 w-5" />,
      },
      {
        path: "/dashboard/settings",
        name: "Settings",
        icon: <IconSettings className="h-5 w-5" />,
      },
    ],
  },
  {
    path: "/dashboard/support",
    name: "Support",
    icon: <IconHelp className="h-5 w-5" />,
  },
  {
    path: "/",
    name: "Logout",
    icon: <IconLogout className="h-5 w-5" />,
  },
];

export default SidebarRoutes;
