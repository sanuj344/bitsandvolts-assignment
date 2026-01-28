import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUserById, updateUser } from "../services/api";
import "./EditUser.css";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    gender: "Male",
    status: "Active",
  });
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchUserData();
  }, [id]);

  const fetchUserData = async () => {
    try {
      setFetching(true);
      const response = await getUserById(id);
      if (response.data.success) {
        setFormData(response.data.data);
      }
    } catch (error) {
      toast.error("Error fetching user: " + error.message);
      navigate("/");
    } finally {
      setFetching(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setLoading(true);
    try {
      const response = await updateUser(id, formData);
      if (response.data.success) {
        toast.success("User updated successfully");
        navigate("/");
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      toast.error("Error updating user: " + errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  if (fetching) {
    return (
      <div className="edit-user-container">
        <div className="loading">Loading user data...</div>
      </div>
    );
  }

  return (
    <div className="edit-user-container">
      <div className="form-wrapper">
        <h1>Edit User</h1>
        <p className="form-subtitle">Update the user details below</p>

        <form onSubmit={handleSubmit} className="user-form-wrapper">
          <div className="form-group">
            <label htmlFor="firstName">
              First Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
              className={errors.firstName ? "input-error" : ""}
            />
            {errors.firstName && (
              <span className="error-message">{errors.firstName}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">
              Last Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
              className={errors.lastName ? "input-error" : ""}
            />
            {errors.lastName && (
              <span className="error-message">{errors.lastName}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="mobile">
              Mobile Number <span className="required">*</span>
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter 10-digit mobile number"
              maxLength="10"
              className={errors.mobile ? "input-error" : ""}
            />
            {errors.mobile && (
              <span className="error-message">{errors.mobile}</span>
            )}
          </div>

          <div className="form-group">
            <label>
              Gender <span className="required">*</span>
            </label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                />
                <span>Male</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                />
                <span>Female</span>
              </label>
            </div>
            {errors.gender && (
              <span className="error-message">{errors.gender}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? "Updating..." : "Update User"}
            </button>
            <button
              type="button"
              className="btn-cancel"
              onClick={handleCancel}
              disabled={loading}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
