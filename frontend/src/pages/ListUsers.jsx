import React, { useState, useEffect } from "react";
import "./ListUsers.css";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Placeholder component - will be fully implemented next
  }, []);

  return (
    <div className="list-users-container">
      <h1>User Management</h1>
      <p>Component placeholder - coming next...</p>
    </div>
  );
};

export default ListUsers;
