function TopReposTable({ repos }) {
  if (!repos || repos.length === 0) return null;

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
          marginBottom: "20px",
        }}
      >
        ⭐ Top Repositories
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th style={{ padding: "12px" }}>Repository</th>
            <th style={{ padding: "12px" }}>Stars</th>
            <th style={{ padding: "12px" }}>Forks</th>
            <th style={{ padding: "12px" }}>Language</th>
          </tr>
        </thead>

        <tbody>
          {repos.map((repo) => (
            <tr key={repo.name}>
              <td style={{ padding: "12px" }}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#60a5fa",
                    textDecoration: "none",
                  }}
                >
                  {repo.name}
                </a>
              </td>

              <td style={{ padding: "12px" }}>
                ⭐ {repo.stars}
              </td>

              <td style={{ padding: "12px" }}>
                🍴 {repo.forks}
              </td>

              <td style={{ padding: "12px" }}>
                {repo.language}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopReposTable;