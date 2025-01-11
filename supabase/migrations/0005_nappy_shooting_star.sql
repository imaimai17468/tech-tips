ALTER TABLE "stocks" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "tips" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "users" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP POLICY "authenticated role stocks all policy" ON "stocks" CASCADE;--> statement-breakpoint
DROP POLICY "authenticated role tips delete policy" ON "tips" CASCADE;--> statement-breakpoint
DROP POLICY "authenticated role tips insert policy" ON "tips" CASCADE;--> statement-breakpoint
DROP POLICY "authenticated role tips update policy" ON "tips" CASCADE;--> statement-breakpoint
DROP POLICY "authenticated role users delete policy" ON "users" CASCADE;--> statement-breakpoint
DROP POLICY "authenticated role users insert policy" ON "users" CASCADE;--> statement-breakpoint
DROP POLICY "authenticated role users update policy" ON "users" CASCADE;