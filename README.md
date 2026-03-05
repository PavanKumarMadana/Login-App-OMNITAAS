# Login Application - React + Node.js/Express

A full-stack login application built with React (frontend) and Node.js/Express (backend) with professional styling and proper error handling.

## 📋 Project Overview

This is a simple yet functional login system that demonstrates:
- **Frontend**: React with functional components and React Hooks
- **Backend**: Node.js with Express REST API
- **Styling**: Modern, responsive CSS with gradient designs
- **Features**: Credential validation, username persistence, error handling, loading states

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or extract the project**
   ```bash
   cd Login-App
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

### Running the Application

**Terminal 1 - Start Backend:**
```bash
cd backend
npm start
```
Backend will run on `http://localhost:5000`

**Terminal 2 - Start Frontend:**
```bash
cd frontend
npm start
```
Frontend will run on `http://localhost:3000`

### Browser Access
Open your browser and navigate to: `http://localhost:3000`

## 🔐 Test Credentials

**Username:** `admin`  
**Password:** `admin`

## 📁 Project Structure

```
Login-App/
├── backend/
│   ├── server.js           # Express server with /login endpoint
│   ├── package.json        # Backend dependencies
│   ├── .env               # Environment variables
│   └── .gitignore         # Git ignore rules
│
└── frontend/
    ├── public/
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    │
    └── src/
        ├── App.js         # Main app with routing
        ├── App.css        # App styling
        ├── Login.js       # Login component
        ├── Login.css      # Login page styling
        ├── Welcome.js     # Welcome component
        ├── Welcome.css    # Welcome page styling
        ├── index.js       # React entry point
        ├── index.css      # Global styles
        └── package.json   # Frontend dependencies
```

## ✨ Features Implemented

### Frontend
- ✅ Login form with username and password fields
- ✅ Form validation and error messages
- ✅ Loading state during API calls
- ✅ Username persistence using localStorage
- ✅ Responsive design for mobile and desktop
- ✅ Welcome page with user information
- ✅ Logout functionality
- ✅ Modern gradient styling with animations
- ✅ React Router for navigation
- ✅ Axios for HTTP requests

### Backend
- ✅ Express server setup with CORS
- ✅ POST /login endpoint for credential validation
- ✅ Input validation
- ✅ Appropriate HTTP status codes (200, 400, 401)
- ✅ Environment variables support (.env)
- ✅ Rate limiting protection
- ✅ Health check endpoint (/health)
- ✅ Error handling and responses

## 🎨 Styling Features

- **Modern Gradient Background**: Purple/blue gradient theme
- **Smooth Animations**: Slide-in, pop-in, and shake animations
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Form Styling**: Clean, modern input fields with focus states
- **Error Messages**: Visual feedback with warnings
- **Card Design**: Elegant white cards with shadows
- **Button States**: Hover effects, disabled states, and loading animations

## 🔑 API Endpoints

### POST /login
Validates user credentials

**Request:**
```json
{
  "username": "admin",
  "password": "admin"
}
```

**Success Response (200):**
```json
{
  "message": "Login successful",
  "success": true,
  "username": "admin"
}
```

**Error Response (401):**
```json
{
  "message": "Invalid credentials",
  "success": false
}
```

### GET /health
Health check endpoint

**Response (200):**
```json
{
  "message": "Server is running"
}
```

## 🛡️ Security Features

- ✅ CORS enabled for safe cross-origin requests
- ✅ Body parser for JSON request validation
- ✅ Rate limiting on login endpoint
- ✅ Environment variables for sensitive configuration
- ✅ Input validation on backend
- ✅ Appropriate HTTP status codes
- ✅ Error handling with custom messages

## 📦 Dependencies

### Backend
- `express` - Web framework
- `cors` - Cross-Origin Resource Sharing
- `body-parser` - Parse JSON requests
- `dotenv` - Environment variable management
- `express-rate-limit` - Rate limiting middleware

### Frontend
- `react` - UI library
- `react-dom` - React DOM rendering
- `react-router-dom` - Client-side routing
- `axios` - HTTP client

## 🧪 Testing the Application

### Test Successful Login:
1. Navigate to `http://localhost:3000`
2. Enter username: `admin`
3. Enter password: `admin`
4. Click "Login"
5. You should be redirected to the Welcome page
6. Username should be displayed: "Welcome, admin!"

### Test Failed Login:
1. Navigate to `http://localhost:3000`
2. Enter any username and password other than admin/admin
3. Click "Login"
4. Error message should display: "Invalid credentials"

### Test Username Persistence:
1. Successfully login and navigate to Welcome page
2. Refresh the browser on the Welcome page
3. Go back to login page
4. The username field should be pre-filled with your previous login username

## 📝 HTTP Status Codes Used

- `200 OK` - Successful login
- `400 Bad Request` - Missing username or password
- `401 Unauthorized` - Invalid credentials
- `500 Internal Server Error` - Server error (if applicable)

## 🚀 Enhancement Opportunities

- Add real database integration (MongoDB, PostgreSQL)
- Implement password hashing (bcrypt)
- Add JWT authentication
- Implement refresh tokens
- Add user registration page
- Add "Remember Me" checkbox
- Add password reset functionality
- Add email verification
- Add two-factor authentication
- Deploy to cloud (Heroku, Vercel, AWS)

## 🐛 Troubleshooting

### Backend won't start
- Check if port 5000 is already in use
- Ensure Node.js is installed: `node --version`
- Install dependencies: `npm install`

### Frontend won't connect to backend
- Make sure backend is running on `http://localhost:5000`
- Check browser console for CORS errors
- Verify CORS is enabled in backend

### Username not being saved
- Check browser localStorage (DevTools > Application > Storage > Local Storage)
- Ensure cookies/storage is enabled in browser

### Port 3000 already in use
- Kill the process or use a different port: `PORT=3001 npm start`

## 📞 Support

For issues or questions, check:
- Backend server logs for API errors
- Browser console (F12) for frontend errors
- Check that both servers are running

## 📄 License

This project is provided as-is for educational purposes.

---

**Happy Coding! 🎉**
