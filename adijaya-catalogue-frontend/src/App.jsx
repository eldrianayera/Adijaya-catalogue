import React, { useState } from "react";
import AdminLogin from "./AdminLogin";

export default function App() {
  const [role, setRole] = useState(localStorage.getItem("role") || null);

  if (!role) {
    // If not logged in, show login page
    return <AdminLogin onLogin={setRole} />;
  }

  // If logged in as admin or visitor, show simple message for now
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome, {role}!</h1>
      {role === "admin" ? (
        <p>You can perform CRUD operations.</p>
      ) : (
        <p>You can only view products.</p>
      )}
      <button
        onClick={() => {
          localStorage.clear();
          setRole(null);
        }}
      >
        Logout
      </button>
    </div>
  );
}
