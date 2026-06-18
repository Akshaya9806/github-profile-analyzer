import { useState } from "react";
import axios from "./services/api";

import TopReposTable from "./components/TopReposTable";
import LanguageChart from "./components/LanguageChart";
import TrendingProfiles from "./components/TrendingProfiles";
import ScoreCard from "./components/ScoreCard";
import RepoStarsChart from "./components/RepoStarsChart";
import ProfileSummary from "./components/ProfileSummary";

function App() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recentSearches, setRecentSearches] = useState(
    JSON.parse(localStorage.getItem("recentSearches")) || []
  );

  const analyzeProfile = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.post(`/analyze/${username}`);

      setProfile(res.data.data);
      const updatedSearches = [
        username,
        ...recentSearches.filter(
          (item) => item !== username
        ),
      ].slice(0, 5);

      setRecentSearches(updatedSearches);

      localStorage.setItem(
        "recentSearches",
        JSON.stringify(updatedSearches)
      );
    } catch (err) {
      setProfile(null);
      setError("❌ GitHub user not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0f172a,#1e1b4b,#312e81)",
        padding: "40px 20px",
        color: "#fff",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}

        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontSize: "4rem",
              color: "#ffffff",
              marginBottom: "15px",
              fontWeight: "800",
              letterSpacing: "1px",
            }}
          >
            GitHub Profile Analyzer
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "1.2rem",
              marginBottom: "50px",
            }}
          >
            Analyze GitHub profiles and discover powerful insights
          </p>
        </div>

        {/* SEARCH */}

        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginBottom: "40px",
            flexWrap: "wrap",
          }}
        >
          <input
            type="text"
            placeholder="Enter GitHub Username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                analyzeProfile();
              }
            }}
            style={{
              width: "600px",
              padding: "18px",
              borderRadius: "15px",
              border: "none",
              fontSize: "16px",
            }}
          />

          <button
            onClick={analyzeProfile}
            style={{
              padding: "18px 35px",
              border: "none",
              borderRadius: "15px",
              background:
                "linear-gradient(90deg,#3b82f6,#8b5cf6)",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Analyze
          </button>
        </div>

        {error && (
          <div
            style={{
              background: "#7f1d1d",
              color: "white",
              padding: "15px",
              borderRadius: "12px",
              marginTop: "20px",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            {error}
          </div>
        )}

        {loading && (
          <div className="spinner-container">
            <div className="spinner"></div>
            <p>Analyzing GitHub Profile...</p>
          </div>
        )}
        {!profile && (
        <div
          style={{
            background: "#111827",
            borderRadius: "20px",
            padding: "20px",
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              color: "#60a5fa",
              marginBottom: "15px",
            }}
          >
            🕒 Recent Searches
          </h2>

          {recentSearches.length === 0 ? (
            <p>No searches yet</p>
          ) : (
            recentSearches.map((item) => (
              <div
                key={item}
                onClick={() => {
                  setUsername(item);

                  setTimeout(() => {
                    document
                      .querySelector("button")
                      ?.click();
                  }, 100);
                }}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  borderBottom:
                    "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {item}
              </div>
            ))
          )}
        </div>
        )}

        {profile && (
          <div
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(12px)",
              borderRadius: "25px",
              padding: "40px",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <button
              onClick={() => {
                setProfile(null);
                setUsername("");
              }}
              style={{
                marginBottom: "20px",
                padding: "12px 20px",
                border: "none",
                borderRadius: "10px",
                background: "#334155",
                color: "white",
                cursor: "pointer",
              }}
            >
              ← Back to Dashboard
            </button>
            {/* PROFILE */}

            <div
              style={{
                textAlign: "center",
                marginBottom: "40px",
              }}
            >
              <img
                src={profile.avatarUrl}
                alt="avatar"
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  border: "5px solid #8b5cf6",
                  marginBottom: "20px",
                }}
              />

              <h2
                style={{
                  color: "#ffffff",
                  fontSize: "2rem",
                  marginBottom: "10px",
                }}
              >
                {profile.name || profile.username}
              </h2>

              <p
                style={{
                  color: "#cbd5e1",
                  fontSize: "18px",
                }}
              >
                @{profile.username}
              </p>

              {profile.bio && (
                <p
                  style={{
                    color: "#d1d5db",
                    maxWidth: "700px",
                    margin: "15px auto",
                  }}
                >
                  {profile.bio}
                </p>
              )}

              <a
                href={profile.profileUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#60a5fa",
                  fontSize: "18px",
                }}
              >
                View GitHub Profile
              </a>
            </div>

            {/* STATS */}

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(220px,1fr))",
                gap: "20px",
              }}
            >
              <Card
                title="Repositories"
                value={profile.publicRepos}
              />

              <Card
                title="Followers"
                value={profile.followers}
              />

              <Card
                title="Following"
                value={profile.following}
              />

              <Card
                title="Account Age"
                value={`${profile.accountAgeDays} Days`}
              />

              <Card
                title="Total Stars"
                value={profile.totalStars}
              />

              <Card
                title="Average Stars"
                value={profile.avgStars}
              />

              <Card
                title="Top Language"
                value={profile.topLanguage}
              />

              <Card
                title="Developer Score"
                value={profile.developerScore}
              />

              <Card
                title="Rank"
                value={profile.rank}
              />

            </div>
            <TopReposTable repos={profile.topRepos} />

            <LanguageChart
              languageCount={profile.languageCount}
            />

            <RepoStarsChart
              repos={profile.topRepos}
            />
            <ScoreCard
              score={profile.developerScore}
              rank={profile.rank}
            />
            <ProfileSummary
              profile={profile}
            />
          </div>
        )}

      {!profile && <TrendingProfiles />}
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg,#1e293b,#0f172a)",
        borderRadius: "20px",
        padding: "25px",
        textAlign: "center",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <h3
        style={{
          color: "#cbd5e1",
          marginBottom: "15px",
        }}
      >
        {title}
      </h3>

      <h2
        style={{
          color: "#60a5fa",
          fontSize: "2rem",
        }}
      >
        {value}
      </h2>
    </div>
  );
}

export default App;