import { z } from "zod";
import { BaseTypeValidator } from "../baseType";
import { UserValidator } from "../user/types";

export const TipValidator = z
  .object({
    title: z.string(),
    description: z.string(),
    content: z.string(),
    favCount: z.number(),
    author: UserValidator,
  })
  .merge(BaseTypeValidator);

export type Tip = z.infer<typeof TipValidator>;
