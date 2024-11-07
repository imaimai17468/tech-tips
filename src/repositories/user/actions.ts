"use server";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { parseWithZod } from "@conform-to/zod";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { UserValidator } from "./types";

const prisma = new PrismaClient();

// biome-ignore lint/correctness/noUnusedVariables: prevStateは使わないのでignoreする
export const updateUser = async (prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: UserValidator,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  console.log(submission.value);

  await prisma.user.update({ where: { id: submission.value.id }, data: submission.value });

  revalidatePath(CLIENT_PATHS.SETTINGS_PROFILE);
};
