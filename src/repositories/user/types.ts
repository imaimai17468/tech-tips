import { z } from "zod";
import { BaseTypeValidator } from "../baseType";

export const UserValidator = z
  .object({
    username: z.string().min(1).max(30),
    bio: z.string().max(200).optional(),
    twitterUsername: z.string().max(20).optional(),
    githubUsername: z.string().max(40).optional(),
    userImageURL: z.string().url().optional(),
  })
  .merge(BaseTypeValidator);

export type User = z.infer<typeof UserValidator>;

export const UserIDValidator = z.string().regex(/^user_[a-zA-Z0-9]{8,}$/);
export type UserID = z.infer<typeof UserIDValidator>;
