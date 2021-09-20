CREATE DATABASE cohyve;

CREATE TABLE club(
  club_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description VARCHAR(250)
);