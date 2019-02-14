DROP DATABASE IF EXISTS muse_db;
CREATE DATABASE muse_db;

USE muse_db;

CREATE TABLE age_1 (
  id INT NOT NULL AUTO_INCREMENT,
  activites VARCHAR(45) NULL,
  rating INT
  ADD UNIQUE (activites),
  PRIMARY KEY (id)
);

INSERT INTO age_1 (activites, rating);
VALUES ("Go to the mall", 0), ("Go on a hike", 0), ("Go to a restaurant", 0), ("Listen to music", 0), ("See a movie", 0);
--Use age_1 for males and females ages 1-20--

CREATE TABLE age_2 (
  id INT NOT NULL AUTO_INCREMENT,
  activites VARCHAR(45) NULL,
  rating INT
  ADD UNIQUE (activites),
  PRIMARY KEY (id)
);

INSERT INTO age_2 (activites, rating);
VALUES ("Go to the mall", 0), ("Go on a hike", 0), ("Try a new restaurant", 0), ("Go to a concert", 0), ("See a movie", 0);
--Use age_2 for males and females ages 21-30--

CREATE TABLE age_3 (
  id INT NOT NULL AUTO_INCREMENT,
  activites VARCHAR(45) NULL,
  rating INT
  ADD UNIQUE (activites),
  PRIMARY KEY (id)
);

INSERT INTO age_3 (activites, rating);
VALUES ("Go to the mall", 0), ("Go on a hike", 0), ("Try a new restaurant", 0), ("Listen to music", 0), ("See a movie", 0);
--Use age_3 for males and females ages 31-40--

CREATE TABLE age_4 (
  id INT NOT NULL AUTO_INCREMENT,
  activites VARCHAR(45) NULL,
  rating INT
  ADD UNIQUE (activites),
  PRIMARY KEY (id)
);

INSERT INTO age_4 (activites, rating);
VALUES ("Go to the mall", 0), ("Go on a hike", 0), ("Try a new restaurant", 0), ("Listen to music", 0), ("See a movie", 0);
--Use age_4 for males and females ages 40+--