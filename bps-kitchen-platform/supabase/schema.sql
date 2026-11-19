-- BP's Kitchen and Catering starter schema
create extension if not exists pgcrypto;
create table if not exists public.profiles (
 id uuid primary key references auth.users(id) on delete cascade,
 full_name text,
 role text not null default 'customer' check (role in ('customer','admin')),
 created_at timestamptz not null default now()
);
create table if not exists public.meal_plans (
 id uuid primary key default gen_random_uuid(),
 name text not null,
 description text,
 price_cents integer not null check(price_cents >= 0),
 duration_days integer,
 active boolean not null default true,
 created_at timestamptz not null default now()
);
create table if not exists public.purchases (
 id uuid primary key default gen_random_uuid(),
 customer_id uuid references public.profiles(id),
 meal_plan_id uuid references public.meal_plans(id),
 status text not null default 'pending' check(status in ('pending','paid','fulfilled','cancelled','refunded')),
 amount_cents integer not null check(amount_cents >= 0),
 payment_provider_ref text,
 fulfillment_details jsonb not null default '{}'::jsonb,
 created_at timestamptz not null default now()
);
create table if not exists public.service_inquiries (
 id uuid primary key default gen_random_uuid(),
 customer_id uuid references public.profiles(id),
 service_type text not null check(service_type in ('catering','private_chef')),
 name text not null,
 email text not null,
 phone text,
 event_date date,
 guest_count integer,
 details text,
 status text not null default 'new' check(status in ('new','contacted','quoted','accepted','declined','completed')),
 created_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
alter table public.meal_plans enable row level security;
alter table public.purchases enable row level security;
alter table public.service_inquiries enable row level security;
create policy "Profiles view own" on public.profiles for select using (auth.uid() = id);
create policy "Public read active meal plans" on public.meal_plans for select using (active = true);
create policy "Customers view own purchases" on public.purchases for select using (auth.uid() = customer_id);
create policy "Customers create own purchases" on public.purchases for insert with check (auth.uid() = customer_id);
create policy "Customers view own inquiries" on public.service_inquiries for select using (auth.uid() = customer_id);
create policy "Customers create inquiries" on public.service_inquiries for insert with check (customer_id is null or auth.uid() = customer_id);
-- Admin policies should be added using a security-reviewed helper function/claim.
-- Do not grant broad table access to anon/authenticated users for production.
