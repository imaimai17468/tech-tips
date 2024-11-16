import { z } from "zod";
import { UserValidator } from "../user/types";

export const TipValidator = z.object({
  id: z.string().ulid(),
  createdAt: z.date(),
  updatedAt: z.date(),
  title: z.string().min(1),
  content: z.string().optional().nullable(),
  tags: z.array(z.string()).max(5).optional(),
  author: UserValidator,
  isPublic: z.boolean().optional(),
});

export type Tip = z.infer<typeof TipValidator>;
