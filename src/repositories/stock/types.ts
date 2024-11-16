import { z } from "zod";

export const StockValidator = z.object({
  id: z.string(),
  createdAt: z.date(),
  userId: z.string(),
  tipId: z.string(),
});

export type Stock = z.infer<typeof StockValidator>;
