import { z } from "zod";
import { BaseTypeValidator } from "../baseType";

export const UserValidator = z
  .object({
    username: z.string(),
    bio: z.string(),
    twitterUsername: z.string(),
    githubUsername: z.string(),
    userImageURL: z.string().url(),
  })
  .merge(BaseTypeValidator);

export type User = z.infer<typeof UserValidator>;
