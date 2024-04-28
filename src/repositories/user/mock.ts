import { faker } from "@faker-js/faker";
import type { User } from "./types";

export const createMockUser = (): User => {
  return {
    id: faker.string.nanoid(),
    username: faker.internet.userName(),
    bio: faker.lorem.paragraph(),
    twitterUsername: faker.internet.userName(),
    githubUsername: faker.internet.userName(),
    userImageURL: faker.image.avatar(),
    createdAt: faker.date.recent().toISOString(),
  };
};

export const createMockUsers = (count: number): User[] => {
  return Array.from({ length: count }, () => createMockUser());
};
