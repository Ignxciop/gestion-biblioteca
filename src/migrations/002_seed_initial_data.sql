INSERT INTO roles (rol)
SELECT 'admin'
WHERE NOT EXISTS (SELECT 1 FROM roles WHERE rol = 'admin');

INSERT INTO roles (rol)
SELECT 'user'
WHERE NOT EXISTS (SELECT 1 FROM roles WHERE rol = 'user');

INSERT INTO users (fullname, email, password, rol_id)
SELECT
    'Admin Example',
    'admin@example.com',
    '$2b$10$eYFTaHHiBnsztLEllaUchuEhyhQvFyAB9jqUUU8d0vxUtdHvuS9Xm', -- admin123
    (SELECT id FROM roles WHERE rol = 'admin')
WHERE NOT EXISTS (SELECT 1 FROM users WHERE email = 'admin@example.com');

INSERT INTO users (fullname, email, password, rol_id)
SELECT
    'User Example',
    'user@example.com',
    '$2b$10$.zIlc0mnWQjmoB1nDCfeDOstFx32alDKUdEgeqZPOeTM0.e4r34HW', -- user123
    (SELECT id FROM roles WHERE rol = 'user')
WHERE NOT EXISTS (SELECT 1 FROM users WHERE email = 'user@example.com');
