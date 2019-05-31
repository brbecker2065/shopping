insert into users(users_handle, items(item_handle, active, quantity, added_date) values
('037b4897-8a2a-46b6-8ed7-47a555bb40f2','88ac31c3-7eb4-4fc5-a249-3de519563e47', 'true', 3,'5/27/2019'),
('17832b68-e91e-45f4-9a92-042c69b1b9c5','e66fc803-4622-41a8-9b53-fe2da9cc6223', 'true', 2,'4/28/2019'),
('2469d45-1a73-41ad-ba62-7bbd4be3278f', '79c2583f-1d69-4f5e-ab93-03583e4fda38', 'true', 1,'4/28/2019')
on conflict do nothing;


