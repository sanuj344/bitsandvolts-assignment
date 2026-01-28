const express = require("express");
const router = express.Router();
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  exportToCSV,
} = require("../controllers/userController");
const {
  validateUser,
  handleValidationErrors,
} = require("../middleware/validation");

// Routes
router.post("/", validateUser, handleValidationErrors, createUser);
router.get("/export/csv", exportToCSV);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", validateUser, handleValidationErrors, updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
