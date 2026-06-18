import { useEffect, useState } from "react";
import axios from "../services/api";

function TrendingProfiles() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchTrending();
  }, []);

  const fetchTrending = async () => {
    try {
      const res = await axios.get("/trending");
      setProfiles(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      style={{
        marginTop: "40px",
        background: "#111827",
        padding: "25px",
        borderRadius: "20px",
        color: "white",
      }}
    >
      <h2
        style={{
          color: "#60a5fa",
          marginBottom: "20px",
        }}
      >
        🔥 Trending Profiles
      </h2>

      {profiles.length === 0 ? (
        <p>No trending profiles found</p>
      ) : (
        profiles.map((profile, index) => (
          <div
            key={profile.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              background: "#1e293b",
              padding: "12px",
              borderRadius: "10px",
              marginBottom: "10px",
            }}
          >
            <span>
              #{index + 1} {profile.username}
            </span>

            <span>
              Searches: {profile.search_count}
            </span>
          </div>
        ))
      )}
    </div>
  );
}

export default TrendingProfiles;