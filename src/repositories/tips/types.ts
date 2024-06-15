import { z } from "zod";
import { BaseTypeValidator } from "../baseType";
import { UserValidator } from "../user/types";

export const TipValidator = z
  .object({
    title: z.string(),
    description: z.string().optional(),
    content: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: UserValidator,
    isPublic: z.boolean(),
  })
  .merge(BaseTypeValidator);

export type Tip = z.infer<typeof TipValidator>;
