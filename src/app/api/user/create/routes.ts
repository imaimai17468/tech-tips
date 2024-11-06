import type { WebhookEvent } from "@clerk/nextjs/server";
import type { UserJSON } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { Webhook } from "svix";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local");
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occurred -- no svix headers", {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Svixインスタンスを使用して署名を検証
  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occurred", {
      status: 400,
    });
  }

  const { id, first_name, last_name, image_url, username } = evt.data as UserJSON;
  const eventType = evt.type;

  if (eventType === "user.created") {
    try {
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

      console.log(`User with ID ${id} created in database.`);
    } catch (error) {
      console.error("Error saving user to database:", error);
      return new Response("Failed to create user in database.", { status: 500 });
    }
  } else {
    console.log(`Unhandled event type: ${eventType}`);
  }

  return new Response("", { status: 200 });
}
