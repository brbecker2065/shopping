insert into cart(user_handle, item_handle, active, quantity, added_date) values
('037b4897-8a2a-46b6-8ed7-47a555bb40f2','88ac31c3-7eb4-4fc5-a249-3de519563e47', true, 3, now() - interval '1 Day'),
('17832b68-e91e-45f4-9a92-042c69b1b9c5','e66fc803-4622-41a8-9b53-fe2da9cc6223', true, 2, now()),
('17832b68-e91e-45f4-9a92-042c69b1b9c$', '79c2583f-1d69-4f5e-ab93-03583e4fda38', true, 1, now())
on conflict do nothing;


