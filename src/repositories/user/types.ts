import { z } from "zod";
import { StockValidator } from "../stock/types";

export const UserValidator = z.object({
  id: z.string().regex(/^user_[a-zA-Z0-9]{8,}$/),
  createdAt: z.date(),
  updatedAt: z.date(),
  username: z.string().min(1).max(30),
  bio: z.string().max(200).optional(),
  twitterUsername: z.string().max(20).optional(),
  githubUsername: z.string().max(40).optional(),
  userImageURL: z.string().url().optional(),
  stocks: z.array(StockValidator).optional(),
});

export type User = z.infer<typeof UserValidator>;
