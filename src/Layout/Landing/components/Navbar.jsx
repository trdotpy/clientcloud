import React from "react";
import { IconSteam } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container navbar rounded bg-base-100">
      <div className="navbar-start">
        <h1 className="btn-ghost btn text-xl">
          ClientCl{" "}
          <span>
            <IconSteam size={24} className="text-error" />
          </span>{" "}
          ud
        </h1>
      </div>
      <div className="navbar-center hidden md:block">
        <ul className="flex gap-x-6 text-sm font-medium tracking-tight">
          <li>Product</li>
          <li>Pricing</li>
          <li>Company</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="navbar-end flex space-x-4">
        <Link to="/login">
          <button className="btn-error btn-sm btn rounded normal-case text-primary">
            Log In
          </button>
        </Link>
        <Link to="/login">
          <button className="btn-secondary btn-sm btn rounded normal-case text-primary">
            Try for Free
          </button>
        </Link>
      </div>
    </div>
  );
}
