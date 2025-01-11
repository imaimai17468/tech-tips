import { sql } from "drizzle-orm";
import { relations } from "drizzle-orm";
import { boolean, pgTable, primaryKey, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  username: text("username").notNull(),
  bio: text("bio"),
  twitterUsername: text("twitter_username"),
  githubUsername: text("github_username"),
  userImageURL: text("user_image_url"),
  clerkUserId: text("clerk_user_id").default(sql`requesting_user_id()`).notNull(),
});

export const tips = pgTable("tips", {
  id: uuid("id").primaryKey().defaultRandom(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  title: text("title").notNull(),
  content: text("content"),
  tags: text("tags").array().notNull().default(sql`ARRAY[]::text[]`),
  isPublic: boolean("is_public").notNull(),
  authorId: text("author_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  clerkUserId: text("clerk_user_id").default(sql`requesting_user_id()`).notNull(),
});

export const stocks = pgTable(
  "stocks",
  {
    userId: text("user_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    tipId: uuid("tip_id")
      .references(() => tips.id, { onDelete: "cascade" })
      .notNull(),
    clerkUserId: text("clerk_user_id").default(sql`requesting_user_id()`).notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.userId, t.tipId] }),
  }),
);

export const usersRelations = relations(users, ({ many }) => ({
  tips: many(tips),
  stocks: many(stocks),
}));

export const tipsRelations = relations(tips, ({ many }) => ({
  stocks: many(stocks),
}));

export const stocksRelations = relations(stocks, ({ one }) => ({
  user: one(users, {
    fields: [stocks.userId],
    references: [users.id],
  }),
  tip: one(tips, {
    fields: [stocks.tipId],
    references: [tips.id],
  }),
}));
