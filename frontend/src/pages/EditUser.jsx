import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./EditUser.css";

const EditUser = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({});

  return (
    <div className="edit-user-container">
      <h1>Edit User</h1>
      <p>Component placeholder - coming next...</p>
    </div>
  );
};

export default EditUser;
