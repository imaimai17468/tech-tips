import { z } from "zod";

export const BaseTypeValidator = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
});
