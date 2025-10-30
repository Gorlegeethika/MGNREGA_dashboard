import React, { useState, useEffect } from 'react';
import './DistrictSelector.css';

function DistrictSelector({ districts, onSelect }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  // ✅ Load login info from localStorage when the app loads
  useEffect(() => {
    const savedUser = localStorage.getItem('username');
    if (savedUser) {
      setUsername(savedUser);
      setIsLoggedIn(true);
    }
  }, []);

  // 🔑 Handle Login
  const handleLogin = () => {
    const name = prompt('Enter your name to login:');
    if (name) {
      setUsername(name);
      setIsLoggedIn(true);
      localStorage.setItem('username', name);
    }
  };

  // 🚪 Handle Logout
  const handleLogout = () => {
    setUsername('');
    setIsLoggedIn(false);
    onSelect(''); // Clear selected district
    localStorage.removeItem('username');
  };

  return (
    <div className="selector-container">
      {/* --- Login/Logout Buttons --- */}
      <div className="auth-buttons">
        {!isLoggedIn ? (
          <button className="auth-btn login" onClick={handleLogin}>
            🔑 Sign In
          </button>
        ) : (
          <>
            <span className="welcome-text">Welcome, <strong>{username}</strong> 👋</span>
            <button className="auth-btn logout" onClick={handleLogout}>
              🚪 Logout
            </button>
          </>
        )}
      </div>

      {/* --- District Selection --- */}
      {isLoggedIn ? (
        <>
          <label className="selector-label">Select Your District:</label>
          <select className="district-dropdown" onChange={(e) => onSelect(e.target.value)}>
            <option value="">-- Choose District --</option>
            {districts.map((d, i) => (
              <option key={i} value={d}>{d}</option>
            ))}
          </select>
        </>
      ) : (
        <p className="login-reminder">Please sign in to view district data.</p>
      )}
    </div>
  );
}

export default DistrictSelector;
