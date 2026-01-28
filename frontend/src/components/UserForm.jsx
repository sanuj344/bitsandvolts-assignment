import React from "react";
import "./UserForm.css";

const UserForm = ({ formData, onSubmit, onChange, loading }) => {
  return (
    <form onSubmit={onSubmit} className="user-form">
      <div className="form-group">
        <label htmlFor="firstName">First Name *</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName || ""}
          onChange={onChange}
          placeholder="Enter first name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name *</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName || ""}
          onChange={onChange}
          placeholder="Enter last name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email || ""}
          onChange={onChange}
          placeholder="Enter email"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="mobile">Mobile Number *</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          value={formData.mobile || ""}
          onChange={onChange}
          placeholder="Enter 10-digit mobile number"
          pattern="[0-9]{10}"
          required
        />
      </div>

      <div className="form-group">
        <label>Gender *</label>
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={onChange}
              required
            />
            <span>Male</span>
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={onChange}
              required
            />
            <span>Female</span>
          </label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          value={formData.status || "Active"}
          onChange={onChange}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
        <button type="button" className="btn-cancel">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UserForm;
