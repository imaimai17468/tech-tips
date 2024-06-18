import { faker } from "@faker-js/faker";
import { createBaseType } from "../baseType";
import type { User } from "./types";

export const createMockUser = (): User => {
  return {
    username: faker.internet.userName(),
    bio: faker.lorem.paragraph(),
    twitterUsername: faker.internet.userName(),
    githubUsername: faker.internet.userName(),
    userImageURL: faker.image.avatar(),
    ...createBaseType(),
  };
};

export const createMockUsers = (count: number): User[] => {
  return Array.from({ length: count }, () => createMockUser());
};
