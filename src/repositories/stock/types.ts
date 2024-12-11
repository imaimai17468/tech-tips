import { z } from "zod";

export const StockValidator = z.object({
  userId: z.string(),
  tipId: z.string(),
});

export type Stock = z.infer<typeof StockValidator>;
