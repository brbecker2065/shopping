create table
if not exists  items  

(  item_handle uuid primary key default gen_random_uuid()
    name text not null,
    price text not null,
    item text not null
  );
grant select, insert, update, delete on table items to project_app;
grant select on table items to project_read;