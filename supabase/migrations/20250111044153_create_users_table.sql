create table "public"."users" (
  -- 必須フィールド
  "id" text primary key check (id ~ '^user_[a-zA-Z0-9]{8,}$'),
  "username" text not null check (char_length(username) >= 1 and char_length(username) <= 30),
  "created_at" timestamp with time zone default timezone('utc'::text, now()) not null,
  "updated_at" timestamp with time zone default timezone('utc'::text, now()) not null,

  -- オプショナルフィールド
  "bio" text check (char_length(bio) <= 200),
  "twitter_username" text check (char_length(twitter_username) <= 20),
  "github_username" text check (char_length(github_username) <= 40),
  "user_image_url" text,
  "clerk_user_id" text default requesting_user_id(),

  -- 制約
  constraint "username_length" check (char_length(username) <= 30)
);

-- RLSポリシー
alter table "public"."users" enable row level security;

create policy "Users are viewable by everyone"
on "public"."users"
for select
to public
using (true);

create policy "Users can be created by authenticated users"
on "public"."users"
for insert
to authenticated
with check (requesting_user_id() = id);

create policy "Users can be updated by the owner"
on "public"."users"
for update
to authenticated
using (requesting_user_id() = id)
with check (requesting_user_id() = id);

-- インデックス
create index users_clerk_user_id_idx on public.users (clerk_user_id);
create index users_username_idx on public.users (username);

-- コメント
comment on table public.users is 'ユーザー情報を管理するテーブル';
comment on column public.users.id is 'ユーザーの一意識別子';
comment on column public.users.username is 'ユーザーの表示名';
comment on column public.users.bio is 'ユーザーの自己紹介文';
comment on column public.users.twitter_username is 'Twitterのユーザー名';
comment on column public.users.github_username is 'GitHubのユーザー名';
comment on column public.users.user_image_url is 'ユーザーのプロフィール画像URL';
comment on column public.users.clerk_user_id is 'Clerkの認証ユーザーID';
