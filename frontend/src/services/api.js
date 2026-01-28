import axios from "axios";

// Use environment variable for API URL, fallback to localhost for development
const API_BASE_URL = `${process.env.REACT_APP_API_URL || "http://localhost:5002"}/api/users`;

// Create user
export const createUser = async (userData) => {
  return await axios.post(API_BASE_URL, userData);
};

// Get all users with pagination and search
export const getUsers = async (page = 1, limit = 10, search = "") => {
  return await axios.get(
    `${API_BASE_URL}?page=${page}&limit=${limit}&search=${search}`
  );
};

// Get user by ID
export const getUserById = async (id) => {
  return await axios.get(`${API_BASE_URL}/${id}`);
};

// Update user
export const updateUser = async (id, userData) => {
  return await axios.put(`${API_BASE_URL}/${id}`, userData);
};

// Delete user
export const deleteUser = async (id) => {
  return await axios.delete(`${API_BASE_URL}/${id}`);
};

// Export users to CSV
export const exportUsersToCSV = async () => {
  return await axios.get(`${API_BASE_URL}/export/csv`, {
    responseType: "blob",
  });
};
