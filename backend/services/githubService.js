const axios = require("axios");

const getGithubData = async (username) => {
  const userResponse = await axios.get(
    `https://api.github.com/users/${username}`
  );

  const repoResponse = await axios.get(
    `https://api.github.com/users/${username}/repos`
  );

  const user = userResponse.data;
  const repos = repoResponse.data;

  let totalStars = 0;
  let languageCount = {};

  repos.forEach((repo) => {
    totalStars += repo.stargazers_count;

    if (repo.language) {
      languageCount[repo.language] =
        (languageCount[repo.language] || 0) + 1;
    }
  });

  const topLanguage =
    Object.keys(languageCount).length > 0
      ? Object.keys(languageCount).reduce((a, b) =>
          languageCount[a] > languageCount[b] ? a : b
        )
      : "N/A";

  const accountAgeDays = Math.floor(
    (Date.now() - new Date(user.created_at)) /
      (1000 * 60 * 60 * 24)
  );

  const developerScore =
    user.followers +
    totalStars * 2 +
    user.public_repos * 5;

  let rank;

  if (developerScore < 1000) {
    rank = "Beginner";
  } else if (developerScore < 5000) {
    rank = "Intermediate";
  } else if (developerScore < 20000) {
    rank = "Advanced";
  } else {
    rank = "Expert";
  }

  const topRepos = [...repos]
    .sort(
      (a, b) =>
        b.stargazers_count -
        a.stargazers_count
    )
    .slice(0, 5)
    .map((repo) => ({
      name: repo.name,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language || "N/A",
      url: repo.html_url,
    }));

  return {
    username: user.login,
    name: user.name,
    bio: user.bio,
    avatarUrl: user.avatar_url,

    publicRepos: user.public_repos,
    followers: user.followers,
    following: user.following,

    accountAgeDays,

    totalStars,

    avgStars:
      repos.length > 0
        ? (
            totalStars / repos.length
          ).toFixed(2)
        : 0,

    topLanguage,

    developerScore,

    rank,

    topRepos,

    languageCount,

    profileUrl: user.html_url,
  };
};

module.exports = getGithubData;