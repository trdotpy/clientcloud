import React, { useEffect, useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";

export default function Menu({ name, icon, dropdown }) {
  const location = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    if (
      dropdown.filter((m) => {
        return (m.path = location.pathname);
      })[0]
    )
      setToggleMenu(true);
  }, []);

  return (
    <div className="flex-col">
      <div
        className="flex w-full justify-between"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <div className="flex gap-x-3">
          {icon} {name}
        </div>
        <IconChevronDown
          className={
            "delay-400 duration-400 float-right h-5 w-5 transition-all " +
            (toggleMenu ? "rotate-180" : "")
          }
        />
      </div>

      <div className={`w-full ` + (toggleMenu ? "" : "hidden")}>
        <ul className={`menu menu-compact`}>
          {dropdown.map((m, k) => {
            return (
              <li key={k}>
                <Link to={m.path}>
                  {m.icon} {m.name}
                  {location.pathname == m.path ? (
                    <div
                      className="absolute inset-y-0 right-0 mt-1 mb-1 w-1 rounded hover:bg-primary"
                      aria-hidden="true"
                    ></div>
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
