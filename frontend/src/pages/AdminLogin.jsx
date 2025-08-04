import { useState } from "react";
import { axiosInstance } from "../api/axiosInstance";
import Header from "../components/shared-components/Header";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e) => {
    setErrMsg("");
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/login", {
        username,
        password,
      });
      const data = res.data;

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      window.location.href = "/";
    } catch (error) {
      console.error("Failed to login :", error.response?.data || error.message);
      setErrMsg(error.response?.data?.message || "Login failed");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] px-4">
        <form
          className="flex flex-col gap-4 w-full max-w-md p-8 border-2 rounded-lg shadow-md bg-white"
          onSubmit={handleSubmit}
        >
          {errMsg && (
            <p className="text-red-600 font-semibold text-center">{errMsg}</p>
          )}

          <label htmlFor="username" className="font-medium">
            Username
          </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            className="border-2 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            value={username}
            required
          />

          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="border-2 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            value={password}
            required
          />

          <button
            type="submit"
            className="mt-4 bg-primary text-white rounded-md py-2 font-semibold hover:bg-primary/90 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
