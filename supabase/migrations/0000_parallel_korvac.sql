CREATE TABLE IF NOT EXISTS "stocks" (
	"user_id" uuid NOT NULL,
	"tip_id" uuid NOT NULL,
	"clerk_user_id" varchar(255),
	CONSTRAINT "stocks_user_id_tip_id_pk" PRIMARY KEY("user_id","tip_id"),
	CONSTRAINT "stocks_clerk_user_id_unique" UNIQUE("clerk_user_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tips" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"title" varchar(255) NOT NULL,
	"content" text,
	"tags" text[] DEFAULT ARRAY[]::text[] NOT NULL,
	"is_public" boolean NOT NULL,
	"author_id" uuid NOT NULL,
	"clerk_user_id" varchar(255),
	CONSTRAINT "tips_clerk_user_id_unique" UNIQUE("clerk_user_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"username" varchar(30) NOT NULL,
	"bio" varchar(200),
	"twitter_username" varchar(255),
	"github_username" varchar(255),
	"user_image_url" varchar(255),
	"clerk_user_id" varchar(255),
	CONSTRAINT "users_clerk_user_id_unique" UNIQUE("clerk_user_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "stocks" ADD CONSTRAINT "stocks_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "stocks" ADD CONSTRAINT "stocks_tip_id_tips_id_fk" FOREIGN KEY ("tip_id") REFERENCES "public"."tips"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tips" ADD CONSTRAINT "tips_author_id_users_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
