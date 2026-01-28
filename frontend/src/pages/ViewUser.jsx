import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ViewUser.css";

const ViewUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  return (
    <div className="view-user-container">
      <h1>View User</h1>
      <p>Component placeholder - coming next...</p>
    </div>
  );
};

export default ViewUser;
