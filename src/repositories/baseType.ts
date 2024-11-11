import { faker } from "@faker-js/faker";
import { z } from "zod";

export const BaseTypeValidator = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type BaseType = z.infer<typeof BaseTypeValidator>;

export const createInitialBaseType = (): BaseType => {
  return {
    id: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

export const createMockBaseType = (): BaseType => {
  return {
    id: faker.string.ulid(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};
