export const CLIENT_PATHS = {
  TOP: "/",
  STOCK: "/stock",
  EXPLORE: "/explore",
  TIP: "/tip",
  TIP_DETAIL: "/tip/[id]",
  TIP_CREATE: "/tip/create",
  TIP_EDIT: "/tip/[id]/edit",
  USER: "/user/[id]",
  SETTINGS_PROFILE: "/setting/profile",
  SETTINGS_TIPS: "/setting/tips",
} as const;

const createRegexPaths = (paths: readonly string[]) => {
  return paths.map((path) => new RegExp(`^${path.replace(/\[id\]/g, "[^/]+")}(.*)$`));
};

export const AUTH_REQUIRED_PATHS_REGEX = createRegexPaths([
  CLIENT_PATHS.STOCK,
  CLIENT_PATHS.EXPLORE,
  CLIENT_PATHS.TIP,
  CLIENT_PATHS.TIP_DETAIL,
  CLIENT_PATHS.TIP_CREATE,
  CLIENT_PATHS.TIP_EDIT,
  CLIENT_PATHS.USER,
  CLIENT_PATHS.SETTINGS_PROFILE,
  CLIENT_PATHS.SETTINGS_TIPS,
]);
