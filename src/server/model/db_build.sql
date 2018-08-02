BEGIN;

DROP TABLE IF EXISTS users, items, orders CASCADE;

CREATE TABLE users(
id SERIAL PRIMARY KEY,
username VARCHAR(20) UNIQUE NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
phone VARCHAR(100) UNIQUE NOT NULL,
password VARCHAR(100),
address TEXT,
m_pesa VARCHAR
);

CREATE TABLE items(
id SERIAL PRIMARY KEY,
title VARCHAR(100),
description TEXT,
image VARCHAR
);

CREATE TABLE orders(
id SERIAL PRIMARY KEY,
item_id INTEGER REFERENCES items(id),
user_id INTEGER REFERENCES users(id),
quantity INTEGER,
status VARCHAR,
delivery_time VARCHAR,
traking_number VARCHAR
);

COMMIT;