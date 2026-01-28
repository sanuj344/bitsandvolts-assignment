# User Management System (MERN) - Setup Instructions

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (Local or Atlas cloud)
- npm or yarn
- Git

## Project Setup

### 1. Backend Setup

#### Step 1: Navigate to backend directory
```bash
cd backend
```

#### Step 2: Install dependencies
```bash
npm install
```

#### Step 3: Configure environment variables
Copy `.env.example` to `.env` and update the values:

```bash
# .env file
MONGODB_URI=mongodb://localhost:27017/user_management_db
PORT=5000
NODE_ENV=development
```

**For MongoDB Atlas (Cloud):**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/user_management_db?retryWrites=true&w=majority
```

#### Step 4: Start MongoDB (if using local)
```bash
# Windows (if MongoDB is installed)
mongod

# Or use MongoDB Compass GUI
```

#### Step 5: Start backend server
```bash
# Development with auto-reload
npm run dev

# Or start normally
npm start
```

The backend will run on `http://localhost:5000`

**Test Backend:**
```bash
curl http://localhost:5000/api/health
```

---

### 2. Frontend Setup

#### Step 1: Navigate to frontend directory (in a new terminal)
```bash
cd frontend
```

#### Step 2: Install dependencies
```bash
npm install
```

#### Step 3: Configure environment variables (optional)
Copy `.env.example` to `.env.local`:

```bash
# .env.local file
REACT_APP_API_URL=http://localhost:5000
```

#### Step 4: Start frontend development server
```bash
npm start
```

The frontend will automatically open at `http://localhost:3000`

---

## API Endpoints

### User Management APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users` | Create a new user |
| GET | `/api/users` | Get all users with pagination |
| GET | `/api/users?page=1&limit=10&search=john` | Get users with search |
| GET | `/api/users/:id` | Get user by ID |
| PUT | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |
| GET | `/api/users/export/csv` | Export all users to CSV |

### Query Parameters

- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `search` - Search by firstName, lastName, or email

---

## File Structure

```
bitsandvolts/
├── backend/
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── config/
│   │   └── database.js
│   ├── middleware/
│   │   └── validation.js
│   ├── server.js
│   ├── package.json
│   ├── .env
│   ├── .env.example
│   └── .gitignore
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Navbar.css
│   │   │   ├── UserTable.jsx
│   │   │   ├── UserTable.css
│   │   │   ├── UserForm.jsx
│   │   │   ├── UserForm.css
│   │   │   ├── Pagination.jsx
│   │   │   └── Pagination.css
│   │   ├── pages/
│   │   │   ├── ListUsers.jsx
│   │   │   ├── ListUsers.css
│   │   │   ├── AddUser.jsx
│   │   │   ├── AddUser.css
│   │   │   ├── EditUser.jsx
│   │   │   ├── EditUser.css
│   │   │   ├── ViewUser.jsx
│   │   │   └── ViewUser.css
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   ├── .env.local (optional)
│   ├── .env.example
│   └── .gitignore
│
├── README.md
├── SETUP_INSTRUCTIONS.md
├── .gitignore
└── git repository
```

---

## Troubleshooting

### MongoDB Connection Error

**Problem:** `MongooseError: Cannot connect to MongoDB`

**Solution:**
1. Ensure MongoDB is running (`mongod` command)
2. Check MONGODB_URI in `.env` file
3. If using MongoDB Atlas, verify connection string and whitelist IP

### Port Already in Use

**Problem:** `EADDRINUSE: address already in use :::5000`

**Solution:**
```bash
# Windows - Kill process on port 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux - Kill process on port 5000
lsof -i :5000
kill -9 <PID>
```

### Dependencies Not Installing

**Problem:** `npm install` fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### CORS Errors

**Problem:** Frontend cannot communicate with backend

**Solution:**
1. Ensure backend is running on `http://localhost:5000`
2. Check CORS configuration in `backend/server.js`
3. Verify `proxy` setting in `frontend/package.json`:
   ```json
   "proxy": "http://localhost:5000"
   ```

---

## Deployment

### Backend Deployment (Render/Heroku)

#### Using Render:
1. Push code to GitHub
2. Connect Render to GitHub
3. Create new Web Service
4. Set environment variables (MONGODB_URI, etc.)
5. Deploy

#### Using Heroku:
```bash
heroku login
heroku create your-app-name
git push heroku main
```

### Frontend Deployment (Netlify/Vercel)

#### Using Netlify:
1. Push code to GitHub
2. Connect Netlify to GitHub repository
3. Set build command: `npm run build`
4. Deploy

#### Using Vercel:
```bash
npm install -g vercel
vercel
```

---

## Running Tests

```bash
# Backend tests (if implemented)
npm test

# Frontend tests
cd frontend
npm test
```

---

## Git Commits Made

1. ✅ `chore: initialize MERN project structure`
2. ✅ `feat: add user model and database connection`
3. ✅ `feat: implement user CRUD APIs with pagination`
4. ✅ `feat: add search and export to CSV API`
5. ✅ `feat: setup frontend routing and layout`
6. ✅ `feat: implement user listing table with pagination`
7. ✅ `feat: add user form with validation`
8. ✅ `feat: create user details view page`
9. ✅ `feat: add error handling and notifications`
10. ✅ `style: improve responsive UI and cleanup`

---

## Features Implemented

✅ User CRUD Operations
✅ Pagination (10 items per page)
✅ Search functionality (by name/email)
✅ CSV Export
✅ Form validation (client & server)
✅ Responsive design (mobile, tablet, desktop)
✅ Toast notifications
✅ Error handling
✅ Status management (Active/Inactive)
✅ User profile view with creative UI

---

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- Express Validator
- CORS

### Frontend
- React.js 18
- React Router DOM v6
- Axios
- React Toastify
- Material-UI Icons (MUI)
- CSS Modules

---

## Support

For issues or questions, please create an issue in the GitHub repository.

---

**Happy Coding! 🚀**
