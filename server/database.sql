CREATE DATABASE cohyve;

CREATE TABLE users(
  user_id UUID DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL UNIQUE,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  school VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE clubs(
  club_id SERIAL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  school VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  created_at DATE NOT NULL DEFAULT CURRENT_DATE,
  verified BOOLEAN NOT NULL DEFAULT FALSE,
  established_in INTEGER,
  state VARCHAR(255),
  website VARCHAR(255),
  instagram VARCHAR(255),
  facebook VARCHAR(255),
  twitter VARCHAR(255),
  email VARCHAR(255),
  follower_count INTEGER NOT NULL DEFAULT 0,
  profileURL VARCHAR,
  bannerURL VARCHAR,
  PRIMARY KEY (club_id)
);

CREATE TABLE members(
  club_id SERIAL,
  user_id UUID,
  role VARCHAR(255),
  pending BOOLEAN NOT NULL,
  FOREIGN KEY (club_id) REFERENCES clubs(club_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  PRIMARY KEY (club_id, user_id)
);

CREATE TABLE followers(
  follower_id SERIAL,
  club_id SERIAL,
  user_id UUID,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (club_id) REFERENCES clubs(club_id),
  PRIMARY KEY(club_id, user_id)
);

-- CREATE TABLE total_followers(
--   club_id SERIAL,
--   follower_count INTEGER NOT NULL,
--   FOREIGN KEY (club_id) REFERENCES clubs(club_id)
-- );

CREATE TABLE partners(
  partner_id SERIAL,
  club_a_id SERIAL,
  club_b_id SERIAL,
  PRIMARY KEY (partner_id),
  FOREIGN KEY (club_a_id) REFERENCES clubs(club_id),
  FOREIGN KEY (club_b_id) REFERENCES clubs(club_id)
);

CREATE TABLE posts(
  post_id SERIAL,
  club_id SERIAL,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  firebase_id VARCHAR(255),
  PRIMARY KEY (post_id),
  FOREIGN KEY (club_id) REFERENCES clubs(club_id)
);

-- insert fake user data
insert into
  users (user_name, user_email, user_password, school)
values
  (
    'createdbyjulius',
    'createdbyjulius@gmail.com',
    'createdbyme',
    'University of Washington'
  );

-- insert fake clubs
insert into
  clubs(name, description, school, category)
values
  (
    'Chemistry Club',
    'Learn everything about chemistry!',
    'University of Washington',
    'Science'
  );

-- insert fake partners
insert into
  partners(club_a_id, club_b_id)
values
  (2, 3);


-- inserting fake club posts 
insert into
  posts(club_id, title, description)
values
  (
    3,
    'We are announcing our partnership with the Chemistry Club',
    'Physics x Chemistry Unite!'
  );

-- select the posts from a club
select
  *
from
  posts
where
  club_id = 1;

-- select a certain post from a certain club
select
  *
from
  posts
where
  club_id = 1
  and post_id = 3;

-- select the members from a club
select
  *
from
  members
where
  club_id = 2;

-- user follows a club
insert into
  followers(club_id, follower_count, user_id)
values
  (
    9,
    1,
    '08aa64a3 - fead -4757 - 840d - 6e6508b23a1a'
  );

-- add a table column
ALTER TABLE clubs ADD COLUMN firebase_id VARCHAR;