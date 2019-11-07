CREATE DATABASE IF NOT EXISTS sqldb;

CREATE TABLE carousel (
        id SERIAL PRIMARY KEY NOT NULL,
        Names VARCHAR(255) NOT NULL, 
        Price NUMERIC (15, 2) NOT NULL,
        Rating NUMERIC (5, 1) NOT NULL,
        Reviews INT NOT NULL,
        Category INT NOT NULL,
        Picture VARCHAR(255) NOT NULL
);