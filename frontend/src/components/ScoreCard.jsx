function ScoreCard({ score, rank }) {
  const percentage = Math.min(
    (score / 25000) * 100,
    100
  );

  return (
    <div
      style={{
        marginTop: "30px",
        background: "#111827",
        borderRadius: "20px",
        padding: "25px",
        color: "white",
      }}
    >
      <h2
        style={{
          color: "#60a5fa",
          marginBottom: "15px",
        }}
      >
        🏆 Developer Score
      </h2>

      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "15px",
        }}
      >
        {score}
      </h1>

      <div
        style={{
          width: "100%",
          height: "15px",
          background: "#1e293b",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            background:
              "linear-gradient(90deg,#3b82f6,#8b5cf6)",
          }}
        />
      </div>

      <p
        style={{
          marginTop: "15px",
          color: "#cbd5e1",
        }}
      >
        Rank: {rank}
      </p>
    </div>
  );
}

export default ScoreCard;