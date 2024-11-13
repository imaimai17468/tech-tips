import { faker } from "@faker-js/faker";
import type { User } from "./types";

export const createMockUser = (user?: Partial<User>): User => {
  return {
    id: `user_${faker.string.alphanumeric(8)}`,
    createdAt: new Date(),
    updatedAt: new Date(),
    username: faker.internet.username(),
    bio: faker.lorem.paragraph(),
    twitterUsername: faker.internet.username(),
    githubUsername: faker.internet.username(),
    userImageURL: faker.image.avatar(),
    ...user,
  };
};

export const createMockUsers = (count: number): User[] => {
  return Array.from({ length: count }, () => createMockUser());
};
