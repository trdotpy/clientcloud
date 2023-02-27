import React from "react";
import { IconAlignLeft, IconSteam } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle btn">
            <IconAlignLeft />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <h1 className="btn-ghost btn text-2xl">
          ClientCl{" "}
          <span>
            <IconSteam size={24} className="text-[#FF7F11]" />
          </span>{" "}
          ud
        </h1>
      </div>
      <div className="navbar-end flex space-x-4">
        <Link to="/login">
          <button className="btn-primary btn-sm btn text-gray-100 md:btn-md">
            Log in
          </button>
        </Link>
      </div>
    </div>
  );
}
