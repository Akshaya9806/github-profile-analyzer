# GitHub Profile Analyzer

A full-stack web application that analyzes GitHub profiles and provides meaningful developer insights through interactive dashboards, repository analytics, language distribution visualizations, and developer ranking metrics.

## 🚀 Overview

GitHub Profile Analyzer allows users to search any public GitHub profile and instantly view detailed statistics, repository insights, language usage trends, developer rankings, and popularity metrics.

The application combines real-time GitHub API data with persistent MySQL storage and interactive visualizations to deliver a modern developer analytics dashboard.

---

## ✨ Features

### 👤 Profile Analysis
- Search and analyze any public GitHub profile
- Display avatar, bio, followers, following, and repository information
- Calculate account age and activity metrics
- Direct GitHub profile access

### 🏆 Developer Insights
- Developer Score calculation
- Developer Rank classification
  - Beginner
  - Intermediate
  - Advanced
  - Expert
- Total Stars analysis
- Average Stars per repository

### 📊 Repository Analytics
- Top repositories ranked by stars
- Repository statistics
  - Stars
  - Forks
  - Primary Language
- Interactive repository visualization

### 📈 Language Analytics
- Most used programming language detection
- Language distribution pie chart
- Technology usage insights

### 🔥 Dashboard Features
- Trending profiles tracking
- Recent searches history
- Loading animations
- Error handling
- Responsive modern UI

### 🗄️ Data Persistence
- Stores analyzed profiles in MySQL
- Tracks profile search frequency
- Maintains profile analytics history

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Axios
- Recharts
- CSS3

### Backend
- Node.js
- Express.js
- REST APIs

### Database
- MySQL

### External APIs
- GitHub REST API

### Deployment
- Render (Backend)
- Vercel (Frontend)

---

## 📂 Project Structure

```text
github-profile-analyzer
│
├── backend
│   ├── config
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 📊 Dashboard Metrics

The application provides:

- Followers
- Following
- Public Repositories
- Total Stars
- Average Stars
- Account Age
- Developer Score
- Developer Rank
- Trending Profiles
- Top Repositories
- Language Distribution

---

## 📡 API Endpoints

### Analyze GitHub Profile

```http
POST /api/github/analyze/:username
```

### Get All Stored Profiles

```http
GET /api/github/profiles
```

### Get Single Profile

```http
GET /api/github/profile/:username
```

### Get Trending Profiles

```http
GET /api/github/trending
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Akshaya9806/github-profile-analyzer.git
cd github-profile-analyzer
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=github_analyzer
```

Run Backend:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## 📄 License

This project is licensed under the MIT License.
