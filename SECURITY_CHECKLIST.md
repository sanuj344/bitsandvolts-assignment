# Security Checklist for Production

## 🔒 Before Deployment

### Environment Variables
- [ ] All sensitive data moved to `.env` files
- [ ] `.env` file is in `.gitignore`
- [ ] No MongoDB credentials in committed code
- [ ] API URLs use environment variables
- [ ] Created `.env.example` with all keys but no values
- [ ] `.env.production` has placeholder URLs

### Code Security
- [ ] No hardcoded API keys or tokens
- [ ] No console.log statements with sensitive data
- [ ] Input validation on all endpoints
- [ ] Output is properly sanitized
- [ ] No debug code left in production
- [ ] Error messages don't expose system details

### Database Security
- [ ] MongoDB user has strong password (12+ chars, mixed case, numbers, symbols)
- [ ] MongoDB credentials are unique (not reused)
- [ ] IP whitelist configured in MongoDB Atlas
- [ ] Database has proper indexes
- [ ] Backups are configured

### API Security
- [ ] CORS is properly configured (not `*`)
- [ ] CORS allows only known domains
- [ ] Rate limiting implemented (optional but recommended)
- [ ] Input validation with express-validator
- [ ] Error handling doesn't leak stack traces
- [ ] Only necessary headers are exposed

### Frontend Security
- [ ] No API keys exposed in JavaScript
- [ ] `.env.production` file is NOT committed
- [ ] Build output is minified
- [ ] No sensitive data in localStorage
- [ ] HTTPS is enforced (Netlify/Vercel handle this)
- [ ] Content Security Policy headers set

### Git Repository
- [ ] `.env` files are in `.gitignore`
- [ ] `node_modules/` is in `.gitignore`
- [ ] `.env.local` is in `.gitignore`
- [ ] No secrets in git history
- [ ] `.git` folder is not exposed

---

## 🔐 Deployment Configuration

### Backend (Render/Heroku)
- [ ] Set `NODE_ENV=production`
- [ ] Set `MONGODB_URI` with production database
- [ ] Set `FRONTEND_URL` to production frontend
- [ ] Set `PORT` environment variable
- [ ] Enable HTTPS (both support this by default)
- [ ] Configure proper error handling
- [ ] Set up logging for monitoring

### Frontend (Netlify/Vercel)
- [ ] Set `REACT_APP_API_URL` to production backend
- [ ] Verify build succeeds: `npm run build`
- [ ] Enable HTTPS (automatic)
- [ ] Configure proper redirects (_redirects for Netlify)
- [ ] Remove any localhost URLs

### MongoDB Atlas
- [ ] Create separate database for production
- [ ] Use strong admin password
- [ ] Whitelist only necessary IPs
- [ ] Enable authentication
- [ ] Enable encryption at rest (Atlas M10+)
- [ ] Configure backups
- [ ] Monitor connection string usage

---

## 🛡️ Post-Deployment Verification

### Test Backend
```bash
# Test API is accessible
curl https://your-backend.com/api/users

# Verify CORS works
curl -H "Origin: https://your-frontend.com" \
     -H "Access-Control-Request-Method: GET" \
     https://your-backend.com/api/users
```

### Test Frontend
- [ ] Page loads without errors
- [ ] Console has no errors (F12)
- [ ] Create user works
- [ ] Search works
- [ ] Edit user works
- [ ] Delete user works
- [ ] CSV export works
- [ ] All styling looks correct

### Test Security
- [ ] No sensitive data in Network tab (F12)
- [ ] API responses don't contain stack traces
- [ ] 404 for non-existent endpoints (not 500)
- [ ] Database credentials not visible anywhere
- [ ] localStorage doesn't contain sensitive data

---

## 📊 Monitoring Setup

### Render
- [ ] Enable email notifications
- [ ] Check logs regularly
- [ ] Monitor server status
- [ ] Set up auto-restart on failure (optional)

### Heroku
- [ ] Monitor dyno status
- [ ] Check logs: `heroku logs --tail`
- [ ] Set up alerts for failures

### Netlify
- [ ] Monitor deploy status
- [ ] Check build logs
- [ ] Enable deploy notifications

### Vercel
- [ ] Monitor deployment logs
- [ ] Enable email notifications
- [ ] Check performance insights

---

## 🔄 Update Checklist

### Every Month
- [ ] Review and update dependencies
- [ ] Check security advisories
- [ ] Review access logs
- [ ] Update environment variables if needed

### Every 3 Months
- [ ] Full security audit
- [ ] Penetration testing (if applicable)
- [ ] Database optimization
- [ ] Performance review

### When Code Changes
- [ ] Run tests
- [ ] Test in production environment
- [ ] Verify CORS configuration
- [ ] Check error handling
- [ ] Monitor logs after deployment

---

## 🚨 Incident Response

### If API is Down
1. Check Render/Heroku logs
2. Verify MongoDB connection
3. Check environment variables
4. Restart the service
5. Check recent deployments

### If Users Report Errors
1. Check browser console (ask user to share)
2. Check backend logs
3. Verify API responses
4. Test from different browser/IP
5. Check MongoDB status

### If Database is Slow
1. Check MongoDB Atlas performance
2. Review indexes
3. Check query logs
4. Optimize slow queries
5. Consider upgrading tier

---

## 📝 Documentation

- [ ] README has deployment instructions
- [ ] Environment variables are documented
- [ ] API endpoints are documented
- [ ] Database schema is documented
- [ ] Troubleshooting guide is available

---

## ✅ Final Sign-Off

- [ ] All items checked
- [ ] No hardcoded secrets
- [ ] CORS properly configured
- [ ] Error handling working
- [ ] Logs being monitored
- [ ] Backup strategy in place

**Deployment Status:** Ready for Production ✅

**Last Updated:** [Date]
**Deployed By:** [Your Name]
**Production URL:** [Backend URL]
**Frontend URL:** [Frontend URL]

