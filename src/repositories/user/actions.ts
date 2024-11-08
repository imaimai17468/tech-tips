"use server";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { type User, UserValidator } from "./types";

const prisma = new PrismaClient();

export const updateUser = async (values: User) => {
  const parsed = UserValidator.safeParse(values);

  if (!parsed.success) {
    throw new Error(`Invalid user data: ${parsed.error.message}`);
  }

  await prisma.user.update({ where: { id: parsed.data.id }, data: parsed.data });

  revalidatePath(CLIENT_PATHS.SETTINGS_PROFILE);
};

export const getUser = async (id: string) => {
  const userResponse = await prisma.user.findUnique({ where: { id } });
  const parsed = UserValidator.safeParse(userResponse);

  if (!userResponse || !parsed.success) {
    return null;
  }

  return parsed.data;
};
