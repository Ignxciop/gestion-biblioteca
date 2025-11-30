CREATE TABLE IF NOT EXISTS roles(
    id SERIAL PRIMARY KEY,
    rol TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    fullname TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP,
    rol_id INTEGER
);

DO $$
BEGIN
    IF NOT EXISTS(
        SELECT 1 FROM pg_constraint
        WHERE conname = 'fk_users_rol'
    ) THEN
        ALTER TABLE users
        ADD CONSTRAINT fk_users_rol
        FOREIGN KEY (rol_id)
        REFERENCES roles(id);
    END IF;
END $$;