create table
if not exists sellers
(
    seller_handle uuid primary key default gen_random_uuid(),
    username text not null,
    first_name text not null,
  	middle_name text,
  	last_name text not null,
  	suffix text,
    email text not null,
    joined_date timestamp
);
grant select, insert, update, delete on table sellers to project_app;
grant select on table sellers to project_read;
