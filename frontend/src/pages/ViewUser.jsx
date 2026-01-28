import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUserById } from "../services/api";
import "./ViewUser.css";

const ViewUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, [id]);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await getUserById(id);
      if (response.data.success) {
        setUser(response.data.data);
      }
    } catch (error) {
      toast.error("Error fetching user: " + error.message);
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleBack = () => {
    navigate("/");
  };

  if (loading) {
    return (
      <div className="view-user-container">
        <div className="loading">Loading user details...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="view-user-container">
        <div className="error">User not found</div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="view-user-container">
      <div className="view-header">
        <h1>User Details</h1>
        <button className="btn-back" onClick={handleBack}>
          ← Back to List
        </button>
      </div>

      <div className="user-card">
        <div className="card-header">
          <div className="avatar">
            {user.profileImage ? (
              <img src={user.profileImage} alt={user.firstName} />
            ) : (
              <div className="avatar-placeholder">
                {user.firstName.charAt(0)}
                {user.lastName.charAt(0)}
              </div>
            )}
          </div>
          <div className="header-info">
            <h2>
              {user.firstName} {user.lastName}
            </h2>
            <p className="email">{user.email}</p>
            <span
              className={`status-badge ${user.status.toLowerCase()}`}
            >
              {user.status}
            </span>
          </div>
        </div>

        <div className="card-body">
          <div className="info-grid">
            <div className="info-item">
              <label>First Name</label>
              <p>{user.firstName}</p>
            </div>

            <div className="info-item">
              <label>Last Name</label>
              <p>{user.lastName}</p>
            </div>

            <div className="info-item">
              <label>Email Address</label>
              <p>
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </p>
            </div>

            <div className="info-item">
              <label>Mobile Number</label>
              <p>
                <a href={`tel:${user.mobile}`}>{user.mobile}</a>
              </p>
            </div>

            <div className="info-item">
              <label>Gender</label>
              <p>{user.gender}</p>
            </div>

            <div className="info-item">
              <label>Status</label>
              <p>
                <span
                  className={`status-badge-small ${user.status.toLowerCase()}`}
                >
                  {user.status}
                </span>
              </p>
            </div>

            <div className="info-item">
              <label>Created On</label>
              <p>{formatDate(user.createdAt)}</p>
            </div>

            <div className="info-item">
              <label>Last Updated</label>
              <p>{formatDate(user.updatedAt)}</p>
            </div>
          </div>
        </div>

        <div className="card-footer">
          <button className="btn-edit" onClick={handleEdit}>
            ✎ Edit User
          </button>
          <button className="btn-back-alt" onClick={handleBack}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
