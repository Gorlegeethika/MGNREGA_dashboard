import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function TrendChart({ monthly }) {
  const data = {
    labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Workdays (in lakh)',
        data: monthly,
        backgroundColor: 'rgba(63, 171, 181, 0.6)',
        borderRadius: 10,
        hoverBackgroundColor: 'rgba(223, 213, 24, 0.8)',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'bottom' },
      title: { display: true, text: '6-Month Performance Trend', color: '#1a237e', font: { size: 18 } }
    },
    animation: {
      duration: 1200,
      easing: 'easeOutBounce'
    },
    scales: {
      y: { beginAtZero: true, grid: { color: '#eee' } },
      x: { grid: { color: '#fafafa' } }
    }
  };

  return (
    <div style={{ width: '80%', margin: '40px auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default TrendChart;
