ALTER TABLE "stocks" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "tips" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE POLICY "authenticated role all policy" ON "stocks" AS PERMISSIVE FOR ALL TO "authenticated" USING (requesting_user_id() = clerk_user_id) WITH CHECK (requesting_user_id() = clerk_user_id);--> statement-breakpoint
CREATE POLICY "authenticated role delete policy" ON "tips" AS PERMISSIVE FOR DELETE TO "authenticated" USING (requesting_user_id() = clerk_user_id);--> statement-breakpoint
CREATE POLICY "authenticated role insert policy" ON "tips" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK (requesting_user_id() = clerk_user_id);--> statement-breakpoint
CREATE POLICY "authenticated role update policy" ON "tips" AS PERMISSIVE FOR UPDATE TO "authenticated" WITH CHECK (requesting_user_id() = clerk_user_id);--> statement-breakpoint
CREATE POLICY "authenticated role delete policy" ON "users" AS PERMISSIVE FOR DELETE TO "authenticated" USING (requesting_user_id() = clerk_user_id);--> statement-breakpoint
CREATE POLICY "authenticated role insert policy" ON "users" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK (requesting_user_id() = clerk_user_id);--> statement-breakpoint
CREATE POLICY "authenticated role update policy" ON "users" AS PERMISSIVE FOR UPDATE TO "authenticated" WITH CHECK (requesting_user_id() = clerk_user_id);