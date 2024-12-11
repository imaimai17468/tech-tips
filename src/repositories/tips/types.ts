import { z } from "zod";
import { StockValidator } from "../stock/types";
import { UserValidator } from "../user/types";

export const TipValidator = z.object({
  id: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
  title: z.string().min(1),
  content: z.string().optional().nullable(),
  tags: z.array(z.string()).max(5).optional(),
  author: UserValidator,
  isPublic: z.boolean().optional(),
  stocks: z.array(StockValidator).optional(),
});

export type Tip = z.infer<typeof TipValidator>;
