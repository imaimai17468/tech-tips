ALTER TABLE "stocks" ALTER COLUMN "clerk_user_id" SET DEFAULT requesting_user_id();--> statement-breakpoint
ALTER TABLE "stocks" ALTER COLUMN "clerk_user_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "tips" ALTER COLUMN "clerk_user_id" SET DEFAULT requesting_user_id();--> statement-breakpoint
ALTER TABLE "tips" ALTER COLUMN "clerk_user_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "clerk_user_id" SET DEFAULT requesting_user_id();--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "clerk_user_id" SET NOT NULL;