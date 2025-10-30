import React from 'react';
import TrendChart from './TrendChart';
import './Dashboard.css';

function Dashboard({ data, name }) {
  return (
    <div className="dashboard-container">
      <h2 className="district-title">{name} District Performance</h2>

      <div className="stats-grid">
        <div className="stat-card workers">
          <span className="icon">👷</span>
          <h3>{data.workers.toLocaleString()}</h3>
          <p>Workers</p>
        </div>

        <div className="stat-card wages">
          <span className="icon">💰</span>
          <h3>₹{data.wages_paid_crore} Cr</h3>
          <p>Wages Paid</p>
        </div>

        <div className="stat-card workdays">
          <span className="icon">📅</span>
          <h3>{data.workdays_lakh} Lakh</h3>
          <p>Workdays</p>
        </div>

        <div className={`stat-card trend ${data.trend === 'up' ? 'up' : 'down'}`}>
          <span className="icon">📈</span>
          <h3>{data.trend === 'up' ? 'Improving' : 'Declining'}</h3>
          <p>Overall Trend</p>
        </div>
      </div>

      <TrendChart monthly={data.monthly} />
    </div>
  );
}

export default Dashboard;
