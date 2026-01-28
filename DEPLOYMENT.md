# Deployment Guide

## Backend Deployment

### Option 1: Deploy on Render (Recommended)

#### Step 1: Prepare Your Repository
```bash
cd backend
git add .
git commit -m "Deploy to Render"
git push origin main
```

#### Step 2: Create Render Account
- Go to [render.com](https://render.com)
- Sign up with GitHub
- Connect your GitHub repository

#### Step 3: Create Web Service
1. Click "New +" → Select "Web Service"
2. Connect your GitHub repository
3. Fill in deployment settings:
   - **Name:** user-management-api
   - **Environment:** Node
   - **Region:** Choose closest to you
   - **Branch:** main
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`

#### Step 4: Set Environment Variables
In Render dashboard:
1. Go to your service → Environment
2. Add the following variables:
   ```
   MONGODB_URI = mongodb+srv://username:password@cluster.mongodb.net/user_management_db
   PORT = 5000
   NODE_ENV = production
   ```

3. Deploy!

#### Get Backend URL
After deployment, Render will provide a URL like:
```
https://user-management-api.onrender.com
```

---

### Option 2: Deploy on Heroku

#### Prerequisites
- Heroku account
- Heroku CLI installed

#### Step 1: Login to Heroku
```bash
heroku login
```

#### Step 2: Create Heroku App
```bash
cd backend
heroku create user-management-api
```

#### Step 3: Set Environment Variables
```bash
heroku config:set MONGODB_URI="mongodb+srv://username:password@cluster.mongodb.net/user_management_db"
heroku config:set NODE_ENV=production
```

#### Step 4: Deploy
```bash
git push heroku main
```

#### View Logs
```bash
heroku logs --tail
```

---

## Frontend Deployment

### Option 1: Deploy on Vercel (Recommended)

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Prepare Frontend
```bash
cd frontend
npm run build
```

#### Step 3: Deploy
```bash
vercel
```

Follow the prompts:
- Link to existing project: No
- Set project name: user-management-frontend
- Choose deployment scope

#### Step 4: Update API URL
After backend deployment, update frontend:
```bash
# In frontend/.env.production
REACT_APP_API_URL=https://user-management-api.onrender.com
```

Then redeploy:
```bash
vercel --prod
```

---

### Option 2: Deploy on Netlify

#### Step 1: Build Frontend
```bash
cd frontend
npm run build
```

#### Step 2: Using Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

#### Step 3: Manual Deploy (via GUI)
1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
6. Set environment variable:
   ```
   REACT_APP_API_URL = https://your-backend-url.com
   ```
7. Deploy!

---

## MongoDB Setup for Production

### Using MongoDB Atlas (Cloud)

#### Step 1: Create Account
- Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
- Sign up
- Create a free cluster

#### Step 2: Create Database
1. Click "Create" → "Database"
2. Select Free tier (M0)
3. Choose region
4. Click "Create"

#### Step 3: Get Connection String
1. Click "Connect"
2. Choose "Connect your application"
3. Copy connection string
4. Replace username and password
5. Add database name

Example:
```
mongodb+srv://username:password@cluster.mongodb.net/user_management_db?retryWrites=true&w=majority
```

#### Step 4: Whitelist IP Address
1. Go to Network Access
2. Click "Add IP Address"
3. Add your server IP or use 0.0.0.0/0 (allow all)

---

## Environment Variables Checklist

### Backend (.env)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/user_management_db
PORT=5000
NODE_ENV=production
```

### Frontend (.env.production)
```
REACT_APP_API_URL=https://your-backend-url.com
```

---

## Post-Deployment Testing

### Test Backend
```bash
curl https://your-backend-url.com/api/health

# Should return:
# {"message":"Server is running"}
```

### Test Frontend
1. Visit your Netlify/Vercel URL
2. Try adding a user
3. Try searching
4. Try CSV export
5. Check browser console for errors (F12)

---

## Monitoring & Logs

### Render
- Dashboard → Your Service → Logs

### Heroku
```bash
heroku logs --tail
```

### Netlify
- Site settings → Build & Deploy → Deploy log

### Vercel
- Dashboard → Select project → Deployments → View logs

---

## Troubleshooting Deployment

### CORS Error
- Verify `proxy` in frontend package.json matches backend URL
- Ensure CORS is enabled in backend

### 502 Bad Gateway
- Check backend logs
- Verify MongoDB connection string
- Restart the backend service

### White Blank Page
- Check browser console (F12)
- Verify REACT_APP_API_URL
- Clear browser cache

### Database Connection Failed
- Verify MongoDB URI
- Check whitelist IP in MongoDB Atlas
- Ensure database exists

---

## Performance Optimization

### Backend
- Add caching headers
- Use compression middleware
- Add database indexes

### Frontend
- Code splitting
- Lazy loading
- Image optimization
- Minification (automatic with build)

---

## Security Checklist

✅ Use environment variables for secrets
✅ Enable HTTPS
✅ Use strong MongoDB passwords
✅ Whitelist backend URL in CORS
✅ Validate all inputs server-side
✅ Use production NODE_ENV
✅ Keep dependencies updated

---

## Live Deployment URLs

Once deployed, your URLs will be:

**Backend:** `https://your-backend-url.com`
**Frontend:** `https://your-frontend-url.com`

Add these to your README.md

---

**Deployment Complete! 🚀**
