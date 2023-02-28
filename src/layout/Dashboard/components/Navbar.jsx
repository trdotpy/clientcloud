import React from "react";
import { IconSteam } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar bg-primary border-b">
      <nav className="navbar-start">
        {/* <button className="btn-ghost btn hidden text-lg normal-case md:flex">
          Dashboard
        </button> */}
        <button className="btn-ghost btn md:hidden">
          <IconSteam size={32} className="w-14" />
        </button>
      </nav>
      <div className="navbar-end flex-none gap-x-2">
        <input
          type="text"
          placeholder="Search"
          className="input-bordered input input-sm hidden max-w-xs md:block"
        />
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            <div className="w-10 rounded-full">
              <img
                src="https://res.cloudinary.com/drij60fru/image/upload/v1677040646/314397231_636674618202803_1672434101401302981_n_v9p2n2.jpg"
                alt="avatar"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <Link to="/dashboard/settings">
                <span className="justify-between">Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/settings">
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
