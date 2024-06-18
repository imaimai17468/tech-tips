import { z } from "zod";

export const BaseTypeValidator = z.object({
  id: z.string(),
  createdAt: z.number(),
  updatedAt: z.number(),
});

export type BaseType = z.infer<typeof BaseTypeValidator>;

export const createBaseType = (): BaseType => {
  return {
    id: "",
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
};
