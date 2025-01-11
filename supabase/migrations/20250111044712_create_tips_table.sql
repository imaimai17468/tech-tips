create table "public"."tips" (
  -- 必須フィールド
  "id" uuid primary key default gen_random_uuid(),
  "title" text not null check (char_length(title) >= 1),
  "created_at" timestamp with time zone default timezone('utc'::text, now()) not null,
  "updated_at" timestamp with time zone default timezone('utc'::text, now()) not null,
  "author_id" text not null references public.users(id) on delete cascade,

  -- オプショナルフィールド
  "content" text,
  "tags" text[] default '{}' check (array_length(tags, 1) <= 5),
  "is_public" boolean default false,
  "clerk_user_id" text default requesting_user_id(),

  -- 制約
  constraint "tags_max_length" check (array_length(tags, 1) <= 5)
);

-- RLSポリシー
alter table "public"."tips" enable row level security;

create policy "Tips are viewable by everyone when public"
on "public"."tips"
for select
to public
using (is_public = true);

create policy "Tips are viewable by owner"
on "public"."tips"
for select
to authenticated
using (requesting_user_id() = author_id);

create policy "Tips can be created by authenticated users"
on "public"."tips"
for insert
to authenticated
with check (requesting_user_id() = author_id);

create policy "Tips can be updated by the owner"
on "public"."tips"
for update
to authenticated
using (requesting_user_id() = author_id)
with check (requesting_user_id() = author_id);

create policy "Tips can be deleted by the owner"
on "public"."tips"
for delete
to authenticated
using (requesting_user_id() = author_id);

-- インデックス
create index tips_author_id_idx on public.tips (author_id);
create index tips_clerk_user_id_idx on public.tips (clerk_user_id);
create index tips_created_at_idx on public.tips (created_at desc);
create index tips_is_public_idx on public.tips (is_public);
create index tips_tags_gin_idx on public.tips using gin (tags);

-- コメント
comment on table public.tips is 'ユーザーが投稿するTips情報を管理するテーブル';
comment on column public.tips.id is 'Tipの一意識別子';
comment on column public.tips.title is 'Tipのタイトル';
comment on column public.tips.content is 'Tipの本文';
comment on column public.tips.tags is 'Tipのタグ（最大5つ）';
comment on column public.tips.author_id is '投稿者のユーザーID';
comment on column public.tips.is_public is '公開設定（true: 公開, false: 非公開）';
comment on column public.tips.clerk_user_id is 'Clerkの認証ユーザーID';
