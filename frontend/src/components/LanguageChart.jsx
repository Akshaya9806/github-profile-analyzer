import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from "recharts";

function LanguageChart({ languageCount }) {
  if (!languageCount) return null;

  const data = Object.entries(languageCount).map(
    ([name, value]) => ({
      name,
      value
    })
  );

  const COLORS = [
    "#3B82F6", // Blue
    "#8B5CF6", // Purple
    "#EC4899", // Pink
    "#10B981", // Green
    "#F59E0B", // Orange
    "#EF4444", // Red
    "#06B6D4", // Cyan
    "#F97316", // Amber
    "#6366F1", // Indigo
    "#D97706"  // Yellow
  ];

  return (
    <div
      style={{
        marginTop: "30px",
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
        📊 Language Distribution
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={130}
            innerRadius={60}
            paddingAngle={4}
            label
            >
            {data.map((entry, index) => (
                <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                />
            ))}
        </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LanguageChart;