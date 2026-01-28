# Quick Start Guide

## Installation & Running the Application

### Prerequisites
- Node.js v14 or higher
- MongoDB (local or Atlas cloud)
- A terminal/command prompt

---

## Step 1: Backend Setup (Terminal 1)

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Verify .env file exists with:
# MONGODB_URI=mongodb://localhost:27017/user_management_db
# PORT=5000
# NODE_ENV=development

# Start backend server
npm run dev
```

✅ **Backend will run on:** `http://localhost:5000`

---

## Step 2: Frontend Setup (Terminal 2)

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start frontend dev server
npm start
```

✅ **Frontend will run on:** `http://localhost:3000`

The application will automatically open in your browser!

---

## 🎮 How to Use

### 1. **Home Page (List Users)**
   - View all users in a table
   - Search by name or email
   - Click pagination to navigate
   - Click buttons: View, Edit, or Delete
   - Change status: Active/Inactive
   - Export to CSV: Click "📥 Export to CSV"

### 2. **Add New User**
   - Click "+ Add User" button in navbar
   - Fill in all required fields
   - Validation errors will show in red
   - Click "Create User" to submit
   - You'll be redirected to home page

### 3. **View User Details**
   - Click "View" button on any user row
   - See beautiful card layout with all info
   - Click "✎ Edit User" to modify
   - Click "Back" to return to list

### 4. **Edit User**
   - Click "Edit" button on user row
   - Modify any field
   - Submit to save changes
   - Returns to home page

### 5. **Delete User**
   - Click "Delete" button
   - Confirm deletion
   - User will be removed instantly

---

## ✅ Test API Endpoints (Optional)

Using curl or Postman:

```bash
# Get health check
curl http://localhost:5000/api/health

# List users
curl http://localhost:5000/api/users

# List with pagination
curl "http://localhost:5000/api/users?page=1&limit=5"

# Search users
curl "http://localhost:5000/api/users?search=john"

# Create user
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "mobile": "9876543210",
    "gender": "Male",
    "status": "Active"
  }'
```

---

## 🐛 Troubleshooting

### Issue: MongoDB Connection Failed
- Make sure MongoDB is running
- Check MONGODB_URI in `.env` file
- Restart the backend server

### Issue: Port 5000 or 3000 Already in Use
- Change PORT in `.env` to a different number
- Or kill the process using the port

### Issue: Blank Page on Frontend
- Check browser console for errors (F12)
- Verify backend is running
- Try clearing browser cache (Ctrl+Shift+Delete)

---

## 📁 Key Files to Know

### Backend
- `backend/server.js` - Main server entry point
- `backend/controllers/userController.js` - All API logic
- `backend/models/User.js` - MongoDB schema

### Frontend
- `frontend/src/App.js` - Main routing
- `frontend/src/pages/ListUsers.jsx` - Home page
- `frontend/src/services/api.js` - API calls

---

## 🚀 Next Steps

1. **Add more users** to test pagination
2. **Search functionality** - Try searching by name or email
3. **CSV Export** - Export data to spreadsheet
4. **Try editing** - Update user information
5. **Delete users** - Test delete functionality

---

## 📚 Full Documentation

See [README.md](./README.md) for detailed information.
See [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md) for advanced setup.

---

**Enjoy using the User Management System! 🎉**
