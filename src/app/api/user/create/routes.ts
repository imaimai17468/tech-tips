import { PrismaClient } from "@prisma/client";
// app/api/user/create/route.ts
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const body = await req.json();
  const { type, data } = body;

  if (type !== "user.created") {
    return NextResponse.json({ error: "Invalid event type" }, { status: 400 });
  }

  try {
    const { id, first_name, last_name, image_url, username } = data;

    await prisma.user.create({
      data: {
        id,
        username: username ?? `${first_name}_${last_name}`,
        bio: "",
        twitterUsername: "",
        githubUsername: "",
        userImageURL: image_url,
      },
    });

    return NextResponse.json({ message: "User created in database." });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create user in database." }, { status: 500 });
  }
}
