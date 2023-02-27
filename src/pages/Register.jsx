import React, { useState } from "react";
import { IconLock, IconSteam } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await register(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
    console.log(
      `User signed up with email: ${email} and password: ${password}`
    );
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
          <input type="hidden" name="remember" value="true" />
          <div className="space-y-2 rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address"></label>
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
              <label htmlFor="password"></label>
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
          <div className="flex items-center justify-center">
            <div className="text-sm">
              <Link to="/login">
                Already have an account?{" "}
                <span className="font-medium underline underline-offset-2">
                  Sign in
                </span>
              </Link>
            </div>
          </div>
          <div>
            <button
              className="btn-primary btn w-full text-gray-100"
              type="submit"
            >
              <IconLock className="mr-1 h-5 w-5" />
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
