insert into items(item_handle, name, price, description) values
('88ac31c3-7eb4-4fc5-a249-3de519563e47', 'Basketball', '14.95','It is an official NBA basketball.'),
('e66fc803-4622-41a8-9b53-fe2da9cc6223', 'dell xps 13', '1595.95','This is a screaming fast Dell computer.'),
('79c2583f-1d69-4f5e-ab93-03583e4fda38', 'basketball', '9.95','This is a childs ball.')
on conflict do nothing;