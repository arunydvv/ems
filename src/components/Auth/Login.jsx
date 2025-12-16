import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function submitHandler(e) {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="w-full max-w-md rounded-2xl border border-emerald-500/30  p-8 shadow-2xl backdrop-blur">
        <h2 className="mb-6 text-center text-2xl font-semibold text-white">
          Welcome Back
        </h2>

        <form className="flex flex-col gap-4" onSubmit={submitHandler}>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-full rounded-full border border-emerald-500 bg-transparent px-5 py-3 text-white placeholder-gray-300 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
            required
            type="email"
            placeholder="Enter your email"
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-full rounded-full border border-emerald-500 bg-transparent px-5 py-3 text-white placeholder-gray-300 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
            required
            type="password"
            placeholder="Enter your password"
          />

          <button
            type="submit"
            className="mt-4 rounded-full bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <span className="cursor-pointer text-emerald-400 hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
