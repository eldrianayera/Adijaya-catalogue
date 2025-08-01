import { useState } from "react";
import { API_BASE_URL } from "../config";
import AdminPage from "./AdminPage";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e) => {
    setErrMsg("");
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error(data.message);
        setErrMsg(data.message);
        setUsername("");
        setPassword("");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      window.location.reload();
    } catch (error) {
      console.error("Failed to login :", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="flex flex-col p-5 gap-2 w-120 border-2"
        onSubmit={handleSubmit}
      >
        <p className="text-red-600">{errMsg}</p>
        <label htmlFor="username">Username :</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          id="username"
          placeholder="username"
          className="border-2 p-2"
          value={username}
        />
        <label htmlFor="password">Username :</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="border-2 p-2"
          value={password}
        />
        <button type="submit" className="border-2 w-20 mx-auto p-1">
          Login
        </button>
      </form>
    </div>
  );
}
