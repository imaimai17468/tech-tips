create table "public"."stocks" (
  -- 必須フィールド
  "user_id" text not null references public.users(id) on delete cascade,
  "tip_id" uuid not null references public.tips(id) on delete cascade,
  "clerk_user_id" text default requesting_user_id(),

  -- 複合主キー
  primary key ("user_id", "tip_id"),

  -- 制約
  constraint "stocks_unique_user_tip" unique ("user_id", "tip_id")
);

-- RLSポリシー
alter table "public"."stocks" enable row level security;

create policy "Stocks are viewable by everyone"
on "public"."stocks"
for select
to public
using (true);

create policy "Stocks can be created by authenticated users"
on "public"."stocks"
for insert
to authenticated
with check (requesting_user_id() = user_id);

create policy "Stocks can be deleted by the owner"
on "public"."stocks"
for delete
to authenticated
using (requesting_user_id() = user_id);

-- インデックス
create index stocks_user_id_idx on public.stocks (user_id);
create index stocks_tip_id_idx on public.stocks (tip_id);
create index stocks_clerk_user_id_idx on public.stocks (clerk_user_id);

-- コメント
comment on table public.stocks is 'ユーザーのTipsストック情報を管理するテーブル';
comment on column public.stocks.user_id is 'ストックしたユーザーのID';
comment on column public.stocks.tip_id is 'ストックされたTipのID';
comment on column public.stocks.clerk_user_id is 'Clerkの認証ユーザーID';
