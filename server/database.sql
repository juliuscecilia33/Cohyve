CREATE DATABASE cohyve;

CREATE TABLE users(
  firebase_user_id VARCHAR UNIQUE NOT NULL,
  school VARCHAR(255),
  school_id INTEGER,
  profileURL VARCHAR,
  bannerURL VARCHAR,
  description VARCHAR,
  name VARCHAR NOT NULL,
  username VARCHAR UNIQUE NOT NULL,
  PRIMARY KEY (firebase_user_id)
  -- add foreign key school_id to schools
);

-- When we make school check, we'll check both the name and id?
-- Checklist add school column and maybe foreign key to postgresql db

CREATE TABLE clubs(
  club_id SERIAL,
  club_name VARCHAR(255) NOT NULL,
  club_description VARCHAR(255),
  club_school VARCHAR(255) NOT NULL,
  club_school_id INTEGER NOT NULL,
  club_category VARCHAR(255) NOT NULL,
  club_created_at DATE NOT NULL DEFAULT CURRENT_DATE,
  club_verified BOOLEAN NOT NULL DEFAULT FALSE,
  club_established_in INTEGER,
  club_state VARCHAR(255),
  club_website VARCHAR(255),
  club_instagram VARCHAR(255),
  club_facebook VARCHAR(255),
  club_twitter VARCHAR(255),
  club_email VARCHAR(255),
  club_follower_count INTEGER NOT NULL DEFAULT 0,
  club_profileURL VARCHAR,
  club_bannerURL VARCHAR,
  club_theme VARCHAR NOT NULL DEFAULT 'Default',
  club_hero INTEGER NOT NULL DEFAULT 1,
  club_feed INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (club_id),
);

CREATE TABLE school(
  school_id INTEGER,
  name VARCHAR NOT NULL,
  banner_URL VARCHAR,
  club_count INTEGER NOT NULL DEFAULT 0,
  school_level VARCHAR,
  PRIMARY KEY (school_id)
);

CREATE TABLE members(
  club_id SERIAL NOT NULL,
  firebase_user_id VARCHAR NOT NULL,
  role VARCHAR(255) NOT NULL DEFAULT 'Member', 
  -- add default 'Member' for role
  pending BOOLEAN NOT NULL,
  priority INTEGER DEFAULT 4, 
  FOREIGN KEY (club_id) REFERENCES clubs(club_id),
  FOREIGN KEY (firebase_user_id) REFERENCES users(firebase_user_id),
  PRIMARY KEY (club_id, firebase_user_id)
);

CREATE TABLE followers(
  follower_id VARCHAR NOT NULL,
  club_id SERIAL NOT NULL,
  firebase_user_id VARCHAR NOT NULL,
  FOREIGN KEY (firebase_user_id) REFERENCES users(firebase_user_id),
  FOREIGN KEY (club_id) REFERENCES clubs(club_id),
  PRIMARY KEY(club_id, firebase_user_id)
  -- shouldn't primary key be follower_id?
);

CREATE TABLE partners(
  partner_id SERIAL,
  club_a_id SERIAL NOT NULL,
  club_b_id SERIAL NOT NULL,
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
  firebase_user_id VARCHAR(255),
  on_community BOOLEAN NOT NULL DEFAULT FALSE,
  post_images text[],
  post_type VARCHAR NOT NULL DEFAULT 'Post',
  post_location VARCHAR,
  post_date VARCHAR,
  post_location_details VARCHAR,
  post_date_details VARCHAR,
  post_text VARCHAR,
  post_whatwedo VARCHAR,
  post_purpose VARCHAR,
  post_contact text[],
  post_support_links text[],
  post_support_goal integer,
  is_pinned BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (post_id),
  FOREIGN KEY (club_id) REFERENCES clubs(club_id),
  FOREIGN KEY (firebase_user_id) REFERENCES users(firebase_user_id)
);

CREATE TABLE posts_partners(
  post_id SERIAL,
  club_partner SERIAL,
  FOREIGN KEY (club_partner) REFERENCES clubs(club_id),
  FOREIGN KEY (post_id) REFERENCES posts(post_id)
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
  followers(club_id, follower_count, firebase_user_id)
values
  (
    9,
    1,
    '08aa64a3 - fead -4757 - 840d - 6e6508b23a1a'
  );

-- add a table column
ALTER TABLE clubs ADD COLUMN firebase_id VARCHAR;