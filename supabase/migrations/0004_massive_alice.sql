ALTER POLICY "authenticated role all policy" ON "stocks" RENAME TO "authenticated role stocks all policy";--> statement-breakpoint
ALTER POLICY "authenticated role delete policy" ON "tips" RENAME TO "authenticated role tips delete policy";--> statement-breakpoint
ALTER POLICY "authenticated role insert policy" ON "tips" RENAME TO "authenticated role tips insert policy";--> statement-breakpoint
ALTER POLICY "authenticated role update policy" ON "tips" RENAME TO "authenticated role tips update policy";--> statement-breakpoint
ALTER POLICY "authenticated role delete policy" ON "users" RENAME TO "authenticated role users delete policy";--> statement-breakpoint
ALTER POLICY "authenticated role insert policy" ON "users" RENAME TO "authenticated role users insert policy";--> statement-breakpoint
ALTER POLICY "authenticated role update policy" ON "users" RENAME TO "authenticated role users update policy";