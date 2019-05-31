create table if not exists cart

(  
    user_handle uuid references users(user_handle),
    item_handle uuid references items(item_handle),
    active boolean not null default true,
    quantity numeric not null default 1,
  added_date timestamptz
    primary key(user_handle, item_handle, added_date)
);
grant select, insert, update, delete on table cart to project_app;
grant select on table cart to project_read;