import { useState } from "react";
import { API_BASE_URL } from "../config";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        const errorText = await res.text();
        console.error(errorText);
      }
      const data = await res.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
    } catch (error) {
      console.error("Failed to login :", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="flex flex-col p-5 gap-2 w-120 border-2"
        onSubmit={handleSubmit}
      >
        <label htmlFor="username">Username :</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          id="username"
          placeholder="username"
          className="border-2 p-2"
        />
        <label htmlFor="username">Username :</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="border-2 p-2"
        />
        <button type="submit" className="border-2 w-20 mx-auto p-1">
          Login
        </button>
      </form>
    </div>
  );
}
