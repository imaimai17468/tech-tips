import { z } from "zod";
import { BaseTypeValidator } from "../baseType";

export const UserValidator = z
  .object({
    username: z.string().min(1).max(20),
    bio: z.string().min(1).max(200),
    twitterUsername: z.string().optional(),
    githubUsername: z.string().optional(),
    userImageURL: z.string().url().optional(),
  })
  .merge(BaseTypeValidator);

export type User = z.infer<typeof UserValidator>;
