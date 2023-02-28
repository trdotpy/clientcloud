import React, { useEffect, useState } from "react";
import { IconChevronDown, IconSteam } from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
import SidebarRoutes from "./SidebarRoutes";

function MenuItem({ path, name, icon, isActive }) {
  return (
    <Link
      to={path}
      className={`flex items-center gap-x-3 ${
        isActive ? "bg-base-200 font-semibold" : "font-normal"
      }`}
    >
      <span>{icon}</span>
      {/* Hide name labels on mobile */}
      <p className="hidden sm:block">{name}</p>
      {/* Active Bar */}
      {isActive && (
        <span
          className="absolute inset-y-0 right-0 w-1 rounded-sm bg-secondary"
          aria-hidden="true"
        ></span>
      )}
    </Link>
  );
}

function DropdownMenu({ dropdown }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (dropdown.find((m) => m.path === location.pathname)) {
      setIsOpen(true);
    }
  }, [dropdown, location.pathname]);

  return (
    <div className="flex-col">
      <div
        className="flex w-full cursor-pointer justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-x-3">
          {dropdown[0].icon} {dropdown[0].name}
        </div>
        <IconChevronDown
          className={`h-5 w-5 transition-all duration-150 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <ul className="menu menu-compact w-full">
          {dropdown.map((item, index) => (
            <li key={index}>
              <MenuItem
                path={item.path}
                name={item.name}
                icon={item.icon}
                isActive={location.pathname === item.path}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Sidebar() {
  const location = useLocation();

  return (
    <nav className="drawer-side border-r">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
      <ul className="menu text-sm md:w-48">
        {/* Menu items */}
        {SidebarRoutes.map(({ dropdown, path, name, icon }, index) => (
          <li key={index}>
            {dropdown ? (
              <DropdownMenu dropdown={dropdown} />
            ) : (
              <MenuItem
                path={path}
                name={name}
                icon={icon}
                isActive={location.pathname === path}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
