🌾 MGNREGA District Dashboard – Telangana
📘 Overview

The MGNREGA District Dashboard is a full-stack web application that visualizes key insights about the Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA) scheme across districts in Telangana.
It allows users to select a district and view details such as wages paid, workers engaged, and workdays generated — helping promote transparency and data awareness.

🚀 Live Demo

🔗 Frontend (React App): https://mgnrega-dashboard-1-nder.onrender.com

🔗 Backend (Express API):https://mgnrega-dashboard-v5ml.onrender.com
(Replace the first link with your actual Render frontend link once it finishes deploying.)

🏗️ Tech Stack
Frontend

React.js

HTML5, CSS3

Chart.js (for visual data representation)

Backend

Node.js

Express.js

RESTful API

Data fetched from a preloaded JSON dataset

Deployment

Render.com for both frontend and backend hosting

GitHub for version control

⚙️ Features

✅ Select district dynamically
✅ Visualize key MGNREGA metrics (charts & cards)
✅ Modern UI with gradient backgrounds and animations
✅ Fully responsive design
✅ Backend API for fetching district-level data
✅ Ready for future features like user login and authorization

MGNREGA_dashboard/
│
├── backend/
│   ├── server.js
│   ├── data.json
│   ├── package.json
│   └── .gitignore
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.js
│   │   │   └── DistrictSelector.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   └── public/
│       └── index.html
│

🧩 Installation (For Local Setup)
1️⃣ Clone the Repository
git clone https://github.com/Gorlegeethika/MGNREGA_dashboard.git
cd MGNREGA_dashboard

2️⃣ Setup Backend
cd backend
npm install
npm start


Backend runs on 👉 http://localhost:4000

3️⃣ Setup Frontend
cd ../frontend
npm install
npm start


Frontend runs on 👉 http://localhost:3000
