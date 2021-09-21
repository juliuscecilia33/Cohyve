CREATE DATABASE cohyve;

CREATE TABLE clubs(
  club_id SERIAL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  school VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  PRIMARY KEY (club_id)
);

CREATE TABLE users(
  user_id UUID DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  school VARCHAR(255) NOT NULL,
  club_id SERIAL,
  PRIMARY KEY (user_id),
  FOREIGN KEY (club_id) REFERENCES clubs(club_id)
);

-- Have not created yet

CREATE TABLE socials(
  social_id SERIAL,
  website VARCHAR(255),
  instagram VARCHAR(255),
  facebook VARCHAR(255),
  twitter VARCHAR(255),
  email VARCHAR(255),
  club_id SERIAL,
  PRIMARY KEY (social_id),
  FOREIGN KEY (club_id) REFERENCES clubs(club_id)
)

CREATE TABLE partners(
  partner_id SERIAL,
  club_a_id SERIAL,
  club_b_id SERIAL, 
  PRIMARY KEY (partner_id),
  FOREIGN KEY (club_a_id) REFERENCES clubs(club_id)
  FOREIGN KEY (club_b_id) REFERENCES clubs(club_id)
)

CREATE TABLE posts(
  post_id SERIAL,
  club_id SERIAL,
  title VARCHAR(255) NOT NULL, 
  description VARCHAR(255),
  created_at DATE NOT NULL DEFAULT CURRENT_DATE,
  PRIMARY KEY (post_id),
  FOREIGN KEY (club_id) REFERENCES clubs(club_id)
)

CREATE TABLE members(
  club_id
)