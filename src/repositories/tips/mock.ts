import { faker } from "@faker-js/faker";
import { createBaseType } from "../baseType";
import { createMockUser } from "../user/mock";
import type { Tip } from "./types";

export const createMockTip = (): Tip => {
  return {
    title: faker.lorem.sentence(),
    description: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(),
    tags: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => faker.lorem.word()),
    author: createMockUser(),
    isPublic: faker.datatype.boolean(),
    ...createBaseType(),
  };
};

export const createMockTips = (count: number): Tip[] => {
  return Array.from({ length: count }, () => createMockTip());
};
