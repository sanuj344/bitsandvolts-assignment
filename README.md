# User Management System (MERN)

A complete Full Stack MERN application for managing users with CRUD operations, pagination, search, and CSV export functionality.

## 🌟 Features

- ✅ **User CRUD Operations** - Create, Read, Update, Delete users
- ✅ **Pagination** - Display 10 users per page with navigation
- ✅ **Search Functionality** - Search by first name, last name, or email
- ✅ **CSV Export** - Export all users to CSV file
- ✅ **Form Validation** - Client-side and server-side validation
- ✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- ✅ **Toast Notifications** - User-friendly success and error messages
- ✅ **Status Management** - Mark users as Active/Inactive
- ✅ **User Details Page** - Beautiful card layout with user information
- ✅ **Edit User** - Update user information seamlessly

## 🛠 Tech Stack

### Frontend
- **React.js** 18.2.0
- **React Router DOM** v6 (Routing)
- **Axios** (HTTP requests)
- **Material-UI Icons** (Icons)
- **React Toastify** (Notifications)
- **CSS Modules** (Styling)

### Backend
- **Node.js** (Runtime)
- **Express.js** (Web framework)
- **MongoDB** (Database)
- **Mongoose** (ODM)
- **Express Validator** (Validation)

## 📁 Project Structure

```
bitsandvolts/
├── backend/
│   ├── controllers/        # Business logic
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API endpoints
│   ├── config/             # Database config
│   ├── middleware/         # Validation & custom middleware
│   ├── server.js           # Express app entry point
│   ├── package.json
│   ├── .env                # Environment variables
│   └── .gitignore
│
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API service
│   │   ├── styles/         # Global styles
│   │   ├── App.js          # Main app component
│   │   └── index.js        # Entry point
│   ├── public/
│   ├── package.json
│   └── .env.local          # Frontend config
│
├── README.md
├── SETUP_INSTRUCTIONS.md   # Detailed setup guide
└── .gitignore
```

## 🚀 Quick Start

### Prerequisites
- Node.js v14+
- MongoDB
- npm or yarn

### Backend Setup
```bash
cd backend
npm install
# Configure .env file
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

**The app will open at `http://localhost:3000`**

For detailed setup instructions, see [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users` | Create user |
| GET | `/api/users?page=1&limit=10&search=` | List users with pagination & search |
| GET | `/api/users/:id` | Get user by ID |
| PUT | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |
| GET | `/api/users/export/csv` | Export to CSV |

## 📱 Routes

- `/` - User listing page with search and pagination
- `/add` - Add new user form
- `/edit/:id` - Edit existing user
- `/view/:id` - View user details

## 📋 User Model

```javascript
{
  firstName: String (required),
  lastName: String (required),
  email: String (required, unique),
  mobile: String (required, 10 digits),
  gender: String (Male/Female),
  status: String (Active/Inactive),
  profileImage: String (optional),
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

## ✨ Key Features

### 1. Listing Page
- Table view with all users
- Search by name or email
- Pagination controls
- View, Edit, Delete buttons
- Status dropdown
- CSV export button
- Responsive table layout

### 2. Add/Edit Form
- Controlled form inputs
- Client-side validation
- Error messages
- Radio buttons for gender
- Status dropdown
- Submit and cancel buttons
- Field validation:
  - First Name: min 2 chars
  - Email: valid format
  - Mobile: exactly 10 digits

### 3. User Details Page
- Creative card layout with gradient header
- Avatar with initials placeholder
- All user information displayed nicely
- Clickable email and phone links
- Formatted timestamps
- Edit button for quick access
- Back to list navigation

## 🎨 UI/UX Features

- **Modern Design** - Clean and professional interface
- **Gradient Headers** - Beautiful visual appeal
- **Color-coded Status** - Green for Active, Red for Inactive
- **Smooth Animations** - Slide-in effects and transitions
- **Responsive Layout** - Mobile-first design
- **Accessibility** - Proper labels and semantic HTML
- **Error States** - Clear error messages with styling

## 🔐 Security Features

- Email uniqueness validation
- Client-side form validation
- Server-side validation using express-validator
- Mongoose schema validation
- CORS enabled
- Error handling on all endpoints

## 📦 Deployment

### Backend
- Ready for deployment on **Render** or **Heroku**
- Environment variables configured
- Error handling for production

### Frontend
- Ready for deployment on **Netlify** or **Vercel**
- Production build optimization
- Environment configuration

## 📝 Git Commit History

```
✅ chore: initialize MERN project structure
✅ feat: add user model and database connection
✅ feat: implement user CRUD APIs with pagination
✅ feat: add search and export to CSV API
✅ feat: setup frontend routing and layout
✅ feat: implement user listing table with pagination
✅ feat: add user form with validation
✅ feat: create user details view page
✅ feat: add error handling and notifications
✅ style: improve responsive UI and cleanup
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💼 Author

Built as a MERN Stack assignment project.

## 🙏 Acknowledgments

- React.js documentation
- Express.js documentation
- MongoDB documentation
- Material-UI community

---

**For detailed setup and deployment instructions, refer to [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)**

**Happy Coding! 🚀**
