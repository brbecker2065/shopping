-- create table
-- if not exists  items  

-- (  item_handle uuid primary key default gen_random_uuid(),
--     item text not null,
--     price text not null
--   );
-- grant select, insert, update, delete on table items to project_app;
 --grant select on table items to project_read;
 create extension
if not exists pgcrypto;
create extension
if not exists pg_stat_statements;

create table
if not exists items
(
    item_handle uuid primary key default gen_random_uuid(),
    item text not null,
    price text not null,
    text text
);
grant select, insert, update, delete on table items to project_app;
grant select on table items to project_read;
