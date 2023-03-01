import React from "react";
import { IconSteam } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar border-b bg-primary">
      <div className="navbar-start items-center">
        {/* Desktop Logo */}
        <Link to="/dashboard/overview">
          <div className="hidden md:block">
            <p className="btn-ghost btn text-xl">
              ClientCl{" "}
              <span>
                <IconSteam size={22} className="text-error" />
              </span>{" "}
              ud
            </p>
          </div>
        </Link>
        <div className="pl-1 md:hidden">
          <span>
            <IconSteam size={32} className="text-error" />
          </span>{" "}
        </div>
      </div>

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
                src="https://res.cloudinary.com/drij60fru/image/upload/v1677684647/egg-3442-e1f6463624338504cd021bf23aef8441_1x_vj31w0.jpg"
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
    </nav>
  );
}
