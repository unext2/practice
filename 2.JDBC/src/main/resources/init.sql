CREATE SCHEMA IF NOT EXISTS public;

CREATE table IF NOT EXISTS genres(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS albums(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    date DATE
);

CREATE TABLE IF NOT EXISTS artists(
	nickname VARCHAR(50) PRIMARY KEY,
	name VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS employees(
	passport_id SERIAL PRIMARY KEY,
	name VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS equipment(
	name VARCHAR(50) PRIMARY KEY,
	kind VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS songs(
	id SERIAL PRIMARY KEY,
	album_id INTEGER REFERENCES albums(id),
	title VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS discography(
	id SERIAL PRIMARY KEY,
	artist_nickname VARCHAR(50) REFERENCES artists(nickname),
	album_id INTEGER REFERENCES albums(id)
);

CREATE TABLE IF NOT EXISTS records (
	id SERIAL PRIMARY KEY,
	artist_nickname VARCHAR(50) REFERENCES artists(nickname),
	song_id INTEGER REFERENCES songs(id),
	employee_passport_id INTEGER REFERENCES employees(passport_id),
	equipment_name VARCHAR(50) REFERENCES equipment(name)
);

 CREATE TABLE IF NOT EXISTS album_style(
 	 id SERIAL PRIMARY KEY,
	 album_id INTEGER REFERENCES albums(id),
	 genre_id INTEGER REFERENCES genres(id)
 );

