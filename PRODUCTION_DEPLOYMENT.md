# Production Deployment Guide

This guide will help you deploy the User Management System to production.

---

## 📋 Pre-Deployment Checklist

- [ ] All code is committed and pushed to GitHub
- [ ] `.env` files are in `.gitignore` (never commit secrets)
- [ ] MongoDB production database is set up (Atlas recommended)
- [ ] Frontend and backend environment variables are configured
- [ ] `npm run build` runs successfully on frontend
- [ ] All dependencies are installed
- [ ] Git remotes are configured

---

## 🔧 Backend Deployment

### Option 1: Deploy on Render (Recommended)

#### Step 1: Prepare Repository
```bash
cd backend
npm install
npm test  # if tests exist
git add .
git commit -m "Deploy to production"
git push origin main
```

#### Step 2: Create Render Account
- Go to [render.com](https://render.com)
- Sign up with GitHub

#### Step 3: Create Web Service
1. Click "New +" → "Web Service"
2. Select your GitHub repository
3. Configure:
   - **Name:** `user-management-api`
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Region:** Choose closest to you

#### Step 4: Set Environment Variables
In Render dashboard → Your Service → Environment:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/user_management_db
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-frontend-domain.com
```

#### Step 5: Deploy
Click "Deploy" and wait for the build to complete.

**Get your Backend URL:**
```
https://your-app-name.onrender.com
```

---

### Option 2: Deploy on Heroku

#### Step 1: Install Heroku CLI
```bash
# Download from https://devcenter.heroku.com/articles/heroku-cli
```

#### Step 2: Login and Create App
```bash
heroku login
cd backend
heroku create your-app-name
```

#### Step 3: Set Environment Variables
```bash
heroku config:set MONGODB_URI="mongodb+srv://username:password@cluster.mongodb.net/dbname"
heroku config:set NODE_ENV=production
heroku config:set FRONTEND_URL="https://your-frontend-domain.com"
```

#### Step 4: Deploy
```bash
git push heroku main
heroku logs --tail
```

**Get your Backend URL:**
```
https://your-app-name.herokuapp.com
```

---

## 🎨 Frontend Deployment

### Option 1: Deploy on Netlify (Recommended)

#### Step 1: Prepare Build
```bash
cd frontend
npm run build
```

#### Step 2: Create Netlify Account
- Go to [netlify.com](https://netlify.com)
- Sign up with GitHub

#### Step 3: Connect Repository
1. Click "Add new site" → "Import an existing project"
2. Select your GitHub repository
3. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`

#### Step 4: Set Environment Variables
In Netlify → Site Settings → Build & Deploy → Environment:

```env
REACT_APP_API_URL=https://your-backend-domain.com
```

#### Step 5: Deploy
Netlify will automatically deploy when you push to GitHub.

**Get your Frontend URL:**
```
https://your-site-name.netlify.app
```

---

### Option 2: Deploy on Vercel

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Deploy
```bash
cd frontend
vercel
```

Follow the prompts:
- Link to existing project: No
- Set project name
- Choose deployment scope

#### Step 3: Set Production Environment Variables
In Vercel → Project Settings → Environment Variables:

```env
REACT_APP_API_URL=https://your-backend-domain.com
```

#### Step 4: Redeploy
```bash
vercel --prod
```

**Get your Frontend URL:**
```
https://your-project-name.vercel.app
```

---

## 🗄️ MongoDB Setup (MongoDB Atlas)

### Create Production Database

#### Step 1: Create Account
- Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
- Sign up

#### Step 2: Create Cluster
1. Click "Create" → "Database"
2. Select M0 (free tier) or higher
3. Choose cloud provider and region
4. Create cluster

#### Step 3: Get Connection String
1. Click "Connect"
2. Choose "Connect your application"
3. Copy connection string
4. Replace `<username>:<password>` with your credentials
5. Replace `<dbname>` with your database name

Example:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/user_management_db?retryWrites=true&w=majority
```

#### Step 4: Whitelist IP
1. Go to "Network Access"
2. Click "Add IP Address"
3. Add your server IP or use `0.0.0.0/0` (allow all - less secure)

---

## 🔗 Update Frontend with Backend URL

After deploying backend, update frontend environment:

### On Netlify:
1. Go to Site Settings → Build & Deploy → Environment
2. Update `REACT_APP_API_URL` to your production backend URL
3. Trigger redeploy

### On Vercel:
1. Go to Project Settings → Environment Variables
2. Update `REACT_APP_API_URL` to your production backend URL
3. Run `vercel --prod`

---

## ✅ Verify Deployment

### Test Backend
```bash
curl https://your-backend-url.com/api/health
# Should return: {"message":"Server is running"}
```

### Test Frontend
1. Visit your frontend URL
2. Try creating a user
3. Try searching
4. Try CSV export
5. Check browser console (F12) for errors

---

## 🐛 Troubleshooting

### CORS Error
- Verify `FRONTEND_URL` in backend environment variables
- Ensure frontend URL matches exactly

### 502 Bad Gateway
- Check backend logs on Render/Heroku
- Verify MongoDB connection string
- Restart the service

### API Returns 404
- Verify `REACT_APP_API_URL` in frontend
- Check backend API routes

### Database Connection Failed
- Verify MongoDB URI
- Check IP whitelist in MongoDB Atlas
- Ensure database exists

---

## 📊 Deployment URLs Example

After successful deployment:

```
Frontend:  https://user-management.netlify.app
Backend:   https://user-management-api.onrender.com
Database:  MongoDB Atlas (Cloud)
```

Update your `.env.production` files with these URLs.

---

## 🔐 Security Best Practices

- ✅ Never commit `.env` files
- ✅ Use strong MongoDB passwords
- ✅ Keep dependencies updated
- ✅ Use HTTPS for all URLs
- ✅ Set `NODE_ENV=production`
- ✅ Use environment variables for secrets
- ✅ Whitelist only necessary IPs in MongoDB

---

## 📈 Monitoring & Logs

### Render Logs
- Dashboard → Your Service → Logs

### Heroku Logs
```bash
heroku logs --tail
```

### Netlify Logs
- Site Settings → Build & Deploy → Deploy Log

### Vercel Logs
- Deployments → Select deployment → Logs

---

## 🚀 Continuous Deployment

All three platforms (Render, Heroku, Netlify, Vercel) support automatic deployment when you push to GitHub:

1. Make changes
2. Commit and push: `git push origin main`
3. Services automatically rebuild and deploy
4. Check logs to verify deployment

---

## 💡 Next Steps

1. Deploy backend first
2. Get backend URL
3. Update frontend environment variables
4. Deploy frontend
5. Test the complete application
6. Monitor logs and fix any issues

---

**Happy Deploying! 🚀**
