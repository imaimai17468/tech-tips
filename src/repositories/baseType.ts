import { faker } from "@faker-js/faker";
import { z } from "zod";

export const BaseTypeValidator = z.object({
  id: z.string(),
  createdAt: z.number(),
  updatedAt: z.number(),
});

export type BaseType = z.infer<typeof BaseTypeValidator>;

export const createInitialBaseType = (): BaseType => {
  return {
    id: "",
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
};

export const createMockBaseType = (): BaseType => {
  return {
    id: faker.string.uuid(),
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
};
