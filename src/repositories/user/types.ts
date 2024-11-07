import { z } from "zod";
import { BaseTypeValidator } from "../baseType";

export const UserValidator = z
  .object({
    username: z.string().min(1).max(30),
    bio: z.string().min(1).max(200).nullable(),
    twitterUsername: z.string().nullable(),
    githubUsername: z.string().nullable(),
    userImageURL: z.string().url().nullable(),
  })
  .merge(BaseTypeValidator);

export type User = z.infer<typeof UserValidator>;
