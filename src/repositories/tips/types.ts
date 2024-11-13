import { z } from "zod";
import { BaseTypeValidator } from "../baseType";
import { UserValidator } from "../user/types";

export const TipValidator = z
  .object({
    title: z.string().min(1),
    content: z.string().optional(),
    tags: z.array(z.string()).max(5).optional(),
    author: UserValidator,
    isPublic: z.boolean(),
  })
  .merge(BaseTypeValidator);

export type Tip = z.infer<typeof TipValidator>;

export const TipIDValidator = z.string().ulid();
export type TipID = z.infer<typeof TipIDValidator>;
