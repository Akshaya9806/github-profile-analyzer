# GitHub Profile Analyzer API

A RESTful backend service built with **Node.js**, **Express.js**, **MySQL**, and the **GitHub Public API**. The application analyzes GitHub user profiles, extracts useful insights, stores them in a MySQL database, and provides APIs to retrieve the analyzed data.

---

## Features

### Analyze GitHub Profiles
- Fetch public GitHub profile information using a username.
- Retrieve repository details using the GitHub API.
- Calculate useful insights such as:
  - Public Repositories Count
  - Followers Count
  - Following Count
  - Account Age (in days)
  - Total Stars Received
  - Average Stars per Repository
  - Most Used Programming Language

### Store Analysis Results
- Save analyzed profile data into a MySQL database.
- Prevent duplicate entries using the GitHub username.

### Retrieve Stored Data
- Get a list of all analyzed GitHub profiles.
- Get detailed information for a specific GitHub profile.

---

## Tech Stack

| Technology | Purpose |
|------------|----------|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MySQL | Database |
| GitHub REST API | Profile & Repository Data |
| Axios | API Requests |
| dotenv | Environment Variables |
| cors | Cross-Origin Resource Sharing |

---

## Project Structure

```text
github-profile-analyzer
│
├── config
│   └── db.js
│
├── controllers
│   └── githubController.js
│
├── routes
│   └── githubRoutes.js
│
├── services
│   └── githubService.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## Database Schema

```sql
CREATE DATABASE github_analyzer;

USE github_analyzer;

CREATE TABLE github_profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    name VARCHAR(255),
    bio TEXT,
    public_repos INT,
    followers INT,
    following INT,
    account_age_days INT,
    total_stars INT,
    avg_stars DECIMAL(10,2),
    top_language VARCHAR(100),
    profile_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Installation & Setup

### 1. Clone Repository

```bash
git clone <repository-url>
cd github-profile-analyzer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=Root@123
DB_NAME=github_analyzer
```

### 4. Start MySQL Server

Make sure MySQL Server is running and the database is created.

### 5. Run Application

Development Mode:

```bash
npm run dev
```

Production Mode:

```bash
npm start
```

---

## API Endpoints

### 1. Analyze GitHub Profile

Fetches data from GitHub and stores insights in MySQL.

**Endpoint**

```http
POST /api/github/analyze/:username
```

**Example**

```http
POST /api/github/analyze/octocat
```

**Response**

```json
{
  "message": "Profile analyzed successfully",
  "data": {
    "username": "octocat",
    "followers": 22927,
    "publicRepos": 8,
    "topLanguage": "JavaScript"
  }
}
```

---

### 2. Get All Analyzed Profiles

**Endpoint**

```http
GET /api/github/profiles
```

**Response**

```json
[
  {
    "id": 1,
    "username": "octocat",
    "followers": 22927,
    "public_repos": 8
  }
]
```

---

### 3. Get Single Profile

**Endpoint**

```http
GET /api/github/profile/:username
```

**Example**

```http
GET /api/github/profile/octocat
```

**Response**

```json
{
  "id": 1,
  "username": "octocat",
  "followers": 22927,
  "public_repos": 8,
  "top_language": "JavaScript"
}
```

---

## GitHub APIs Used

### User Profile API

```http
https://api.github.com/users/{username}
```

Example:

```http
https://api.github.com/users/octocat
```

Used for:

- Username
- Name
- Bio
- Followers
- Following
- Public Repositories
- Account Creation Date

---

### User Repositories API

```http
https://api.github.com/users/{username}/repos
```

Used for:

- Total Stars
- Average Stars
- Top Programming Language

---

## Sample Insights Stored

| Insight | Description |
|----------|-------------|
| Public Repositories | Number of public repositories |
| Followers | Number of followers |
| Following | Number of following users |
| Account Age | GitHub account age in days |
| Total Stars | Sum of stars across repositories |
| Average Stars | Average stars per repository |
| Top Language | Most frequently used language |

---

## Testing

The APIs can be tested using:

- Postman
- Thunder Client
- Browser (GET Endpoints)

### Sample Requests

```http
POST http://localhost:5000/api/github/analyze/octocat
```

```http
GET http://localhost:5000/api/github/profiles
```

```http
GET http://localhost:5000/api/github/profile/octocat
```

---
