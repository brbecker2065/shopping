insert into items(item_handle, name, price) values
('7487860752', 'Basketball', '14.95'),
('3958931744', 'dell xps 13', '1595.95'),
('8902342501', 'basketball', '9.95')
on conflict do nothing;