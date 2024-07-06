import { faker } from "@faker-js/faker";
import { createMockBaseType } from "../baseType";
import { createMockUser } from "../user/mock";
import { MOCK_CONTENT } from "./data";
import type { Tip, TipForm } from "./types";

export const createInitialTipForm = (): TipForm => {
  return {
    title: "",
    isPublic: false,
    content: undefined,
    tags: undefined,
  };
};

export const createMockTipForm = (): TipForm => {
  return {
    title: faker.lorem.sentence(),
    isPublic: faker.datatype.boolean({ probability: 0.5 }),
    content: MOCK_CONTENT,
    tags: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => faker.lorem.word()),
  };
};

export const createMockTip = (): Tip => {
  return {
    ...createMockTipForm(),
    author: createMockUser(),
    ...createMockBaseType(),
  };
};

export const createMockTips = (count: number): Tip[] => {
  return Array.from({ length: count }, () => createMockTip());
};
