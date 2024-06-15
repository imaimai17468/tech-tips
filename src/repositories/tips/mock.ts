import { faker } from "@faker-js/faker";
import { createMockUser } from "../user/mock";
import type { Tip } from "./types";

export const createMockTip = (): Tip => {
  return {
    id: faker.string.nanoid(),
    title: faker.lorem.sentence(),
    description: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(),
    tags: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => faker.lorem.word()),
    author: createMockUser(),
    createdAt: faker.date.recent().toISOString(),
    isPublic: faker.datatype.boolean(),
  };
};

export const createMockTips = (count: number): Tip[] => {
  return Array.from({ length: count }, () => createMockTip());
};
