import { faker } from "@faker-js/faker";
import { createMockBaseType } from "../baseType";
import type { User } from "./types";

export const createMockUser = (user?: Partial<User>): User => {
  return {
    username: faker.internet.username(),
    bio: faker.lorem.paragraph(),
    twitterUsername: faker.internet.username(),
    githubUsername: faker.internet.username(),
    userImageURL: faker.image.avatar(),
    ...createMockBaseType(),
    ...user,
  };
};

export const createMockUsers = (count: number): User[] => {
  return Array.from({ length: count }, () => createMockUser());
};
