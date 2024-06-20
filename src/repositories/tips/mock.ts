import { faker } from "@faker-js/faker";
import { createMockBaseType } from "../baseType";
import { createMockUser } from "../user/mock";
import type { Tip, TipForm } from "./types";

export const createInitialTipForm = (): TipForm => {
  return {
    title: "",
    isPublic: false,
    description: undefined,
    content: undefined,
    tags: undefined,
  };
};

export const createMockTipForm = (): TipForm => {
  return {
    title: faker.lorem.sentence(),
    isPublic: faker.datatype.boolean(),
    description: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(),
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
