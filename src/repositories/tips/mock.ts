import { faker } from "@faker-js/faker";
import { createMockUser } from "../user/mock";
import { MOCK_CONTENT } from "./data";
import type { Tip } from "./types";

export const createMockTip = (defaultTip?: Partial<Tip>): Tip => {
  return {
    id: faker.string.ulid(),
    createdAt: new Date(),
    updatedAt: new Date(),
    title: faker.lorem.sentence(),
    isPublic: faker.datatype.boolean({ probability: 0.5 }),
    content: MOCK_CONTENT,
    tags: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => faker.lorem.word()),
    author: createMockUser(),
    ...defaultTip,
  };
};

export const createMockTips = (count: number): Tip[] => {
  return Array.from({ length: count }, () => createMockTip());
};
