CREATE TABLE products
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    price INTEGER NOT NULL,
    img TEXT
);