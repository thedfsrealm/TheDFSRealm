create table players (
  id serial primary key,
  name text,
  team text,
  position text,
  salary int,
  status text
);

create table lineups (
  id serial primary key,
  contest text,
  captain text,
  flex jsonb,
  salary_used int,
  spirit_blessing text,
  created_at timestamp default now()
);

create table watchers (
  id serial primary key,
  name text,
  role text,
  message text,
  created_at timestamp default now()
);

create table verse_journal (
  id serial primary key,
  verse text,
  blessing text,
  created_at timestamp default now()
);
