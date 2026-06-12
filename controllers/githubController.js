const db = require("../config/db");
const getGithubData = require("../services/githubService");

exports.analyzeProfile = async (req, res) => {
  try {
    const data = await getGithubData(req.params.username);

    const sql = `
      INSERT INTO github_profiles
      (
        username,
        name,
        bio,
        public_repos,
        followers,
        following,
        account_age_days,
        total_stars,
        avg_stars,
        top_language,
        profile_url
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
      followers = VALUES(followers),
      public_repos = VALUES(public_repos),
      total_stars = VALUES(total_stars)
    `;

    db.query(
      sql,
      [
        data.username,
        data.name,
        data.bio,
        data.publicRepos,
        data.followers,
        data.following,
        data.accountAgeDays,
        data.totalStars,
        data.avgStars,
        data.topLanguage,
        data.profileUrl
      ],
      (err) => {
        if (err) {
          return res.status(500).json(err);
        }

        res.json({
          message: "Profile analyzed successfully",
          data
        });
      }
    );
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.getAllProfiles = (req, res) => {
  db.query(
    "SELECT * FROM github_profiles",
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json(result);
    }
  );
};

exports.getSingleProfile = (req, res) => {
  db.query(
    "SELECT * FROM github_profiles WHERE username=?",
    [req.params.username],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      if (result.length === 0) {
        return res.status(404).json({
          message: "Profile not found"
        });
      }

      res.json(result[0]);
    }
  );
};