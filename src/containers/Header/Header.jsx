import React from "react";
import { IconSteam } from "@tabler/icons-react";

export default function Header() {
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <span className="btn-ghost btn hidden text-lg normal-case md:flex">
          Dashboard
        </span>
        <span className="btn-ghost btn md:hidden">
          <IconSteam size={32} className="w-14" />
        </span>
      </div>
      <div className="navbar-end flex-none gap-x-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-sm max-w-xs"
        />
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            <div className="w-10 rounded-full">
              <img src="https://res.cloudinary.com/drij60fru/image/upload/v1677040646/314397231_636674618202803_1672434101401302981_n_v9p2n2.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
