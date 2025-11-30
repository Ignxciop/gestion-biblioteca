UPDATE users
SET rol_id = (SELECT id FROM roles WHERE rol = 'user')
WHERE rol_id IS NULL;

ALTER TABLE users
ALTER COLUMN rol_id SET NOT NULL;
