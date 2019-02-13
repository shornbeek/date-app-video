DROP DATABASE IF EXISTS dateapp_db;
CREATE DATABASE dateapp_db;
USE dateapp_db;

CREATE TABLE users (
	id INTEGER AUTO_INCREMENT NOT NULL,
    name VARCHAR(75) NOT NULL,
    email VARCHAR(255) NOT NULL,
    photo VARCHAR(255) NOT NULL,
    age INT(2) NOT NULL,
    sex BOOLEAN NOT NULL, -- male=false female=true
    description TEXT,
    interests VARCHAR(255),
    findMan BOOLEAN DEFAULT false
    findWoman BOOLEAN DEFAULT false,
    active BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY(id)
);

CREATE TABLE liked (
	userId INTEGER NOT NULL,
    liked INTEGER NOT NULL, --This is the id of a user they liked
    PRIMARY KEY(userId)
);

CREATE TABLE matches (
	id INTEGER AUTO_INCREMENT NOT NULL,
	user1Id INTEGER NOT NULL,
    user2Id INTEGER NOT NULL,
    user1Waved BOOLEAN DEFAULT false,
    user2Waved BOOLEAN DEFAULT false,
    user1Active BOOLEAN DEFAULT false,
    user2Active BOOLEAN DEFAULT false,
    canCall BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);