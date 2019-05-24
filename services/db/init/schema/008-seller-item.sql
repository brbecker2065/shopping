create table
if not exists seller_item

(seller_id uuid references sellers(seller_handle),
 item_id uuid references items(item_handle), 
 primary key (seller_id, item_id));

grant select, insert, update, delete on table seller_item to project_app;
grant select on table seller_item to project_read;
