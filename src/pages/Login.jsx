import React, { useState } from "react";
import { IconFlame, IconSteam } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { logIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
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
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* <input type="hidden" name="remember" value="true" /> */}
          <div className="space-y-2 rounded-md shadow-sm">
            <div>
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-bordered input input-md w-full rounded-md"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-bordered input input-md w-full rounded-md"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="form-control">
              <div className="label cursor-pointer">
                <Link to="/reset-account">
                  <span className="label-text text-xs underline-offset-4 hover:underline">
                    Forgot your password?
                  </span>
                </Link>
              </div>
            </div>
            <div className="text-xs">
              <Link to="/register">
                New to ClientCloud?{" "}
                <span className="font-medium underline underline-offset-2">
                  Sign up
                </span>
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <button className="btn-info btn w-full" type="submit">
              Sign In
            </button>
            <button
              className="btn-primary btn w-full text-white"
              onClick={() => {
                setEmail("demo@trdotpy.dev");
                setPassword("hireme");
              }}
            >
              <IconFlame className="mr-1 h-6 w-6" />
              Test Demo Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
