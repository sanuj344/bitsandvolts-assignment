import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserTable from "../components/UserTable";
import Pagination from "../components/Pagination";
import { getUsers, deleteUser, updateUser, exportUsersToCSV } from "../services/api";
import "./ListUsers.css";

const ListUsers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [search, setSearch] = useState("");
  const [limit] = useState(10);

  useEffect(() => {
    fetchUsers(currentPage, search);
  }, [currentPage, search]);

  const fetchUsers = async (page, searchQuery) => {
    setLoading(true);
    try {
      const response = await getUsers(page, limit, searchQuery);
      setUsers(response.data.data);
      setTotalPages(response.data.pagination.totalPages);
      setTotalUsers(response.data.pagination.totalUsers);
    } catch (error) {
      toast.error("Error fetching users: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleView = (id) => {
    navigate(`/view/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      handleDeleteUser(id);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      const response = await deleteUser(id);
      if (response.data.success) {
        toast.success("User deleted successfully");
        setCurrentPage(1);
        fetchUsers(1, search);
      }
    } catch (error) {
      toast.error("Error deleting user: " + error.message);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const user = users.find((u) => u._id === id);
      if (user) {
        const response = await updateUser(id, { ...user, status: newStatus });
        if (response.data.success) {
          toast.success("Status updated successfully");
          fetchUsers(currentPage, search);
        }
      }
    } catch (error) {
      toast.error("Error updating status: " + error.message);
    }
  };

  const handleExportCSV = async () => {
    try {
      const response = await exportUsersToCSV();
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `users_${new Date().getTime()}.csv`);
      document.body.appendChild(link);
      link.click();
      link.parentElement.removeChild(link);
      toast.success("CSV exported successfully");
    } catch (error) {
      toast.error("Error exporting CSV: " + error.message);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="list-users-container">
      <div className="list-users-header">
        <div>
          <h1>User Management</h1>
          <p className="user-count">Total Users: {totalUsers}</p>
        </div>
        <button className="btn-export" onClick={handleExportCSV}>
          📥 Export to CSV
        </button>
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="search-input"
          value={search}
          onChange={handleSearch}
        />
      </div>

      <UserTable
        users={users}
        loading={loading}
        onEdit={handleEdit}
        onView={handleView}
        onDelete={handleDelete}
        onStatusChange={handleStatusChange}
      />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default ListUsers;
