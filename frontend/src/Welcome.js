import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const navigate = useNavigate();
    const username = localStorage.getItem('username') || 'User';

    const handleLogout = () => {
        setIsLoggingOut(true);
        // Simulate logout delay
        setTimeout(() => {
            localStorage.removeItem('username');
            navigate('/');
        }, 500);
    };

    return (
        <div className="welcome-container">
            <div className="welcome-wrapper">
                <div className="welcome-card">
                    <div className="welcome-header">
                        <div className="success-icon">✓</div>
                        <h1>Welcome, {username}!</h1>
                        <p>You have successfully logged in</p>
                    </div>

                    <div className="welcome-content">
                        <div className="info-box">
                            <h2>🎉 Great to see you!</h2>
                            <p>You are now logged into the application. This is a demo login system built with React and Node.js/Express.</p>
                        </div>

                        <div className="features-box">
                            <h3>Features Implemented:</h3>
                            <ul>
                                <li>✓ Secure login with credential validation</li>
                                <li>✓ Username persistence using localStorage</li>
                                <li>✓ Responsive design</li>
                                <li>✓ Error handling and loading states</li>
                                <li>✓ RESTful API integration</li>
                            </ul>
                        </div>

                        <div className="user-info">
                            <h3>User Information:</h3>
                            <div className="info-item">
                                <span className="label">Username:</span>
                                <span className="value">{username}</span>
                            </div>
                            <div className="info-item">
                                <span className="label">Login Time:</span>
                                <span className="value">{new Date().toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                    <button 
                        onClick={handleLogout} 
                        className={`logout-button ${isLoggingOut ? 'logging-out' : ''}`}
                        disabled={isLoggingOut}
                    >
                        {isLoggingOut ? 'Logging out...' : '🚪 Logout'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
