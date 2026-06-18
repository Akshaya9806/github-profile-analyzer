function ProfileSummary({ profile }) {
  if (!profile) return null;

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
          color: "#60A5FA",
          marginBottom: "20px",
        }}
      >
        📋 Profile Summary
      </h2>

      <p>
        <strong>{profile.name}</strong> (@
        {profile.username}) has{" "}
        <strong>{profile.followers}</strong>
        {" "}followers, owns{" "}
        <strong>{profile.publicRepos}</strong>
        {" "}public repositories and has earned{" "}
        <strong>{profile.totalStars}</strong>
        {" "}total stars.
      </p>

      <br />

      <p>
        Most used language:
        {" "}
        <strong>
          {profile.topLanguage}
        </strong>
      </p>

      <p>
        Account age:
        {" "}
        <strong>
          {profile.accountAgeDays}
        </strong>
        {" "}days
      </p>

      <p>
        Developer Rank:
        {" "}
        <strong>
          {profile.rank}
        </strong>
      </p>

      <p>
        Developer Score:
        {" "}
        <strong>
          {profile.developerScore}
        </strong>
      </p>
    </div>
  );
}

export default ProfileSummary;