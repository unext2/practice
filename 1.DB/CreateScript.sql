CREATE TABLE GENRES (
	id LONG PRIMARY KEY,
	name VARCHAR(50)
);

CREATE TABLE ALBUMS (
	id LONG PRIMARY KEY,
	title VARCHAR(50),
);

CREATE TABLE ARTISTS (
	id LONG PRIMARY KEY,
	name VARCHAR(50)
);

CREATE TABLE EMPLOYEES (
	id LONG PRIMARY KEY,
	name VARCHAR(50)
);

CREATE TABLE SONGS (
	id LONG PRIMARY KEY,
	album_id LONG,
	name VARCHAR(50),
	FOREIGN KEY (album_id) REFERENCES ALBUMS (id)
);

CREATE TABLE RECORDS (
	id LONG PRIMARY KEY,
	artist_id LONG,
	song_id LONG,
	employee_id LONG,
	date DATE,
	FOREIGN KEY (artist_id) REFERENCES ARTISTS (id),
	FOREIGN KEY (song_id) REFERENCES SONGS (id),
	FOREIGN KEY (employee_id) REFERENCES EMPLOYEES (id)
);
 CREATE TABLE ALBUM_GENRE (
	 album_id LONG,
	 genre_id LONG,
	 FOREIGN KEY (album_id) REFERENCES ALBUMS (id),
	 FOREIGN KEY (genre_id) REFERENCES GENRES (id)
 );




