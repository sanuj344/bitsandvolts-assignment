# User Management System (MERN)

A complete Full Stack MERN application for managing users with CRUD operations, pagination, search, and CSV export functionality.

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Material-UI (MUI)
- React Toastify
- PapaParse (CSV export)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Express Validator

## Project Structure

```
bitsandvolts/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── middleware/
│   ├── server.js
│   ├── package.json
│   └── .env
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   ├── styles/
    │   ├── App.js
    │   └── index.js
    ├── public/
    ├── package.json
    └── .env
```

## Features

- ✅ User CRUD Operations
- ✅ Pagination
- ✅ Search Functionality
- ✅ CSV Export
- ✅ Form Validation
- ✅ Responsive Design
- ✅ Toast Notifications
- ✅ Status Management

## API Endpoints

- `POST /api/users` - Create a new user
- `GET /api/users` - List users with pagination and search
- `GET /api/users/:id` - Get user details
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user
- `GET /api/users/export/csv` - Export users to CSV

## Installation & Setup

### Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:
```
MONGODB_URI=mongodb://localhost:27017/user_management_db
PORT=5000
NODE_ENV=development
```

Start the server:
```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

The frontend will run on `http://localhost:3000`

## Routes

- `/` - User Listing Page
- `/add` - Add New User
- `/edit/:id` - Edit User
- `/view/:id` - View User Details

## Deployment

- Backend: Render/Heroku
- Frontend: Netlify/Vercel

## Author

Built as a MERN Stack assignment.
