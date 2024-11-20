import { sql } from "drizzle-orm";
import { relations } from "drizzle-orm";
import { boolean, pgTable, primaryKey, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  username: varchar("username", { length: 30 }).notNull(),
  bio: varchar("bio", { length: 200 }),
  twitterUsername: varchar("twitter_username", { length: 255 }),
  githubUsername: varchar("github_username", { length: 255 }),
  userImageURL: varchar("user_image_url", { length: 255 }),
  clerkUserId: varchar("clerk_user_id", { length: 255 }).unique(),
});

export const tips = pgTable("tips", {
  id: uuid("id").primaryKey().defaultRandom(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content"),
  tags: text("tags").array().notNull().default(sql`ARRAY[]::text[]`),
  isPublic: boolean("is_public").notNull(),
  authorId: uuid("author_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  clerkUserId: varchar("clerk_user_id", { length: 255 }).unique(),
});

export const stocks = pgTable(
  "stocks",
  {
    userId: uuid("user_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    tipId: uuid("tip_id")
      .references(() => tips.id, { onDelete: "cascade" })
      .notNull(),
    clerkUserId: varchar("clerk_user_id", { length: 255 }).unique(),
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
