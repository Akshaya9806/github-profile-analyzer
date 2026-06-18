import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function RepoStarsChart({ repos }) {
  if (!repos || repos.length === 0) return null;

  const data = repos.map((repo) => ({
    name: repo.name,
    stars: repo.stars,
  }));

  return (
    <div
      style={{
        marginTop: "30px",
        background: "#111827",
        padding: "25px",
        borderRadius: "20px",
      }}
    >
      <h2
        style={{
          color: "#60a5fa",
          marginBottom: "20px",
        }}
      >
        ⭐ Repository Stars
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            tick={{ fill: "#ffffff" }}
          />

          <YAxis
            tick={{ fill: "#ffffff" }}
          />

          <Tooltip />

          <Bar
            dataKey="stars"
            fill="#60A5FA"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RepoStarsChart;