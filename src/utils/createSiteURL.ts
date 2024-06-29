export const createSitePath = (mode: "x" | "github", username: string) => {
  switch (mode) {
    case "x":
      return `https://x.com/${username}`;
    case "github":
      return `https://github.com/${username}`;
  }
};
