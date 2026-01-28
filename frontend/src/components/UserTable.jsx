import React from "react";
import "./UserTable.css";

const UserTable = ({ users, loading, onEdit, onView, onDelete, onStatusChange }) => {
  return (
    <div className="table-wrapper">
      <table className="user-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="7" className="loading-cell">
                Loading...
              </td>
            </tr>
          ) : users && users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id} className="user-row">
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.gender}</td>
                <td>
                  <select
                    className={`status-badge ${user.status.toLowerCase()}`}
                    value={user.status}
                    onChange={(e) => onStatusChange(user._id, e.target.value)}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </td>
                <td className="action-buttons">
                  <button className="btn-view" onClick={() => onView(user._id)}>
                    View
                  </button>
                  <button className="btn-edit" onClick={() => onEdit(user._id)}>
                    Edit
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => onDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="empty-cell">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
