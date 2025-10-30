import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import DistrictSelector from './components/DistrictSelector';
import './App.css';

function App() {
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://mgnrega-dashboard-v5ml.onrender.com/api/districts')
      .then(res => res.json())
      .then(setDistricts)
      .catch(err => console.error('Error fetching districts:', err));
  }, []);

  const handleSelect = (d) => {
    setDistrict(d);
    if (d) {
      fetch(`https://mgnrega-dashboard-v5ml.onrender.com/api/district/${d}`)
        .then(res => res.json())
        .then(setData)
        .catch(err => console.error('Error fetching data:', err));
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>🌾 MGNREGA District Dashboard – Telangana</h1>
        <p>Empowering citizens to track rural development transparently</p>
      </header>

      <main className="content">
        <DistrictSelector districts={districts} onSelect={handleSelect} />

        {!district && (
          <div className="welcome-card">
            <h2>Welcome to the MGNREGA Dashboard</h2>
            <p>
              Explore how your district is performing under the MGNREGA scheme.
              <br></br>  
              Select your district above to see <strong>wages paid</strong>, <strong>workers engaged</strong>,  
              and <strong>workdays generated</strong> over recent months.
            </p>

          </div>
        )}

        {district && data && (
          <>
            <Dashboard data={data} name={district} />
            <div className="thankyou-card">
              <h2>🌟 Thank you for exploring your district’s progress!</h2>
              <p>
                Every click builds awareness, and every insight empowers our communities. 💪  
                Keep exploring and stay informed — together, we drive change! 🌍
              </p>
            </div>
          </>
        )}
      </main>

      <footer className="footer">
        © 2025 Government of India | Built by <strong>Geethika</strong>
      </footer>
    </div>
  );
}

export default App;
