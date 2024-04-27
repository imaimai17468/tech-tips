import { faker } from "@faker-js/faker";
import { createMockUser } from "../user/mock";
import type { Tip } from "./types";

const createNewMockTip = (): Tip => {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words(),
    description: faker.lorem.words(),
    content: faker.lorem.words(),
    favCount: faker.number.int({ max: 10000 }),
    author: createMockUser(),
    createdAt: faker.date.recent().toISOString(),
  };
};

export const createMockTips = (count: number): Tip[] => {
  return Array.from({ length: count }, () => createNewMockTip());
};
