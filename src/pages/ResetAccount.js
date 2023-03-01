import { IconSend, IconSteam } from "@tabler/icons-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ResetAccount() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-base-200 px-8 pb-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <div className="flex justify-center">
            <Link to="/">
              <h1 className="btn-ghost btn text-3xl">
                ClientCl{" "}
                <span>
                  <IconSteam size={28} className="text-[#FF7F11]" />
                </span>{" "}
                ud
              </h1>
            </Link>
          </div>
        </div>
        <div className="flex-col justify-center">
          <p className="text-xs">
            We take your security very seriously - which is we've integrated a
            state-of-the-art account reset system for our premium subscribers.{" "}
            <span className="font-semibold underline">Platinum</span> members
            may enter their email below to receive a reset link to their inbox.
            If you are not a Platinum member, your account is gone forever.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2 rounded-md shadow-sm">
            <div>
              <input
                type="email"
                placeholder="Email"
                required
                className="input-bordered input input-md w-full rounded-md"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-xs">
              <Link to="/login">
                Remember your password?{" "}
                <span className="font-medium underline underline-offset-2">
                  Login
                </span>
              </Link>
            </div>
          </div>
          <div className="flex justify-center space-y-2">
            <button className="btn-info btn" type="submit">
              Reset Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
