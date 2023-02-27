import { IconSteam } from "@tabler/icons-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-base-100 p-10 text-base-content">
      <div>
        <h1 className="btn-ghost btn text-xl">
          ClientCl{" "}
          <span>
            <IconSteam size={24} className="text-error" />
          </span>{" "}
          ud
        </h1>
      </div>
      <div>
        <p className="footer-title">Services</p>
        <span className="link-hover link">Branding</span>
        <span className="link-hover link">Design</span>
        <span className="link-hover link">Marketing</span>
        <span className="link-hover link">Advertisement</span>
      </div>
      <div>
        <p className="footer-title">Company</p>
        <span className="link-hover link">About us</span>
        <span className="link-hover link">Contact</span>
        <span className="link-hover link">Jobs</span>
        <span className="link-hover link">Press kit</span>
      </div>
      <div>
        <p className="footer-title">Legal</p>
        <span className="link-hover link">Terms of use</span>
        <span className="link-hover link">Privacy policy</span>
        <span className="link-hover link">Cookie policy</span>
      </div>
    </footer>
  );
}
