# Setup and Run Guide

## System Requirements
- Node.js v14+
- npm v6+
- Any modern web browser
- Windows/Mac/Linux

## Step-by-Step Setup Instructions

### 1. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the backend server
npm start
```

**Expected Output:**
```
✓ Server is running on port 5000
✓ Use credentials: username "admin", password "admin"
```

### 2. Frontend Setup (in a new terminal)

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the frontend server
npm start
```

**Expected Output:**
```
Compiled successfully!
You can now view frontend in the browser.
Local:            http://localhost:3000
```

## Accessing the Application

1. **Open Browser:** `http://localhost:3000`
2. **Login Screen** should appear
3. **Enter Demo Credentials:**
   - Username: `admin`
   - Password: `admin`
4. **Click Login** button
5. **Welcome Page** should display after successful login

## Project File Overview

### Key Backend Files
- **server.js** - Main Express server
  - Handles POST /login endpoint
  - Validates credentials (username: admin, password: admin)
  - Returns JSON responses
  - Includes rate limiting and error handling

- **.env** - Environment configuration
  - PORT=5000
  - SECRET_KEY=your_secret_key_here

- **package.json** - Backend dependencies
  - express: Web framework
  - cors: Cross-origin requests
  - body-parser: JSON parsing
  - dotenv: Environment variables
  - express-rate-limit: Rate limiting

### Key Frontend Files

- **App.js** - Main application component
  - Sets up React Router
  - Routes to Login (/) and Welcome (/welcome) pages
  - Handles navigation between routes

- **Login.js** - Login form component
  - Input fields for username and password
  - Form submission with axios POST request
  - Error message display
  - Username persistence to localStorage

- **Welcome.js** - Welcome/success page
  - Displays logged-in username
  - Shows login information
  - Logout button functionality
  - Displays current date/time

- **Styling Files**
  - Login.css - Beautiful gradient background, form styling, animations
  - Welcome.css - Welcome page design, info boxes, responsive layout
  - App.css - Global app styling
  - index.css - Global CSS variables and reset

## API Endpoint Reference

### Login Endpoint
**URL:** `POST http://localhost:5000/login`

**Request Body:**
```json
{
  "username": "admin",
  "password": "admin"
}
```

**Success Response (HTTP 200):**
```json
{
  "message": "Login successful",
  "success": true,
  "username": "admin"
}
```

**Failure Response (HTTP 401):**
```json
{
  "message": "Invalid credentials. Try admin/admin",
  "success": false
}
```

### Health Check Endpoint
**URL:** `GET http://localhost:5000/health`

**Response:**
```json
{
  "message": "Server is running"
}
```

## Testing Scenarios

### ✅ Successful Login Test
1. Username: `admin`
2. Password: `admin`
3. Expected: Redirect to /welcome and show "Welcome, admin!"

### ❌ Failed Login Test
1. Username: `wrong`
2. Password: `credentials`
3. Expected: Display error message "Invalid credentials"

### 💾 Persistence Test
1. Successfully login
2. Refresh the page
3. Go back to login page
4. Expected: Username field pre-filled with "admin"

### 📱 Responsive Test
1. Open application on desktop/tablet/mobile
2. Expected: Layout adapts and remains usable on all screen sizes

## Troubleshooting

### Issue: "Cannot GET /"
**Solution:** Make sure frontend is running on port 3000

### Issue: Error connecting to server
**Solution:** 
- Check backend is running on port 5000
- Check if port 5000 is available
- Try: `netstat -ano | findstr :5000` (Windows)

### Issue: Port already in use
**Solution:**
- Kill the process using that port
- Or start on different port: `PORT=3001 npm start`

### Issue: Dependencies not installing
**Solution:**
- Clear npm cache: `npm cache clean --force`
- Delete node_modules folder
- Delete package-lock.json
- Run `npm install` again

### Issue: CORS errors in browser
**Solution:**
- Check backend CORS is enabled
- Verify backend is accepting requests from http://localhost:3000

## Development Tips

### Debugging Frontend
1. Open Chrome DevTools (F12)
2. Go to Console tab for JS errors
3. Check Network tab for API calls
4. Use React Developer Tools extension

### Debugging Backend
1. Check terminal for server logs
2. Add console.log statements in server.js
3. Check .env file for PORT configuration
4. Restart server after code changes

### Hot Reload
- Frontend: Changes auto-refresh (npm start)
- Backend: Need to restart server manually for changes

## Next Steps for Production

1. **Database Integration** - Add real user database
2. **Password Hashing** - Use bcrypt for password security
3. **JWT Tokens** - Implement JWT authentication
4. **Environment Config** - Add .env files for different environments
5. **Deployment** - Deploy to Heroku, Vercel, or AWS
6. **HTTPS** - Use SSL certificates in production
7. **Error Logging** - Add error logging service
8. **Rate Limiting** - Enhance rate limiting rules
9. **Input Validation** - Add comprehensive input validation
10. **Testing** - Add unit and integration tests

## File Checklist

Backend:
- ✅ server.js
- ✅ package.json
- ✅ .env
- ✅ .gitignore

Frontend:
- ✅ App.js (with routing)
- ✅ App.css
- ✅ Login.js
- ✅ Login.css
- ✅ Welcome.js
- ✅ Welcome.css
- ✅ index.js (unchanged)
- ✅ index.css (updated)
- ✅ package.json (dependencies added)

---

**Everything is set up and ready to go! Happy coding! 🚀**
