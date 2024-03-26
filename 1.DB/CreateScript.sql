CREATE TABLE GENRES (
	id UUID PRIMARY KEY,
	name VARCHAR(50)
);

CREATE TABLE ALBUMS (
	id UUID PRIMARY KEY,
	title VARCHAR(50),
	date DATE
);

CREATE TABLE ARTISTS (
	nickname VARCHAR(50) PRIMARY KEY,
	name VARCHAR(50)
);

CREATE TABLE EMPLOYEES (
	passport_id UUID PRIMARY KEY,
	name VARCHAR(50)
);

CREATE TABLE EQUIPMENT (
	name VARCHAR(50) PRIMARY KEY,
	kind VARCHAR(50)
	
);

CREATE TABLE SONGS (
	id UUID PRIMARY KEY,
	album_id UUID,
	number integer,
	title VARCHAR(50),
	FOREIGN KEY (album_id) REFERENCES ALBUMS (id)
);

CREATE TABLE DISCOGRAPHY (
	id UUID PRIMARY KEY,
	artist_nickname VARCHAR(50),
	album_id UUID,
	FOREIGN KEY (artist_nickname) REFERENCES ARTISTS (nickname),
	FOREIGN KEY (album_id) REFERENCES ALBUMS (id)
);

CREATE TABLE RECORDS (
	id UUID PRIMARY KEY,
	artist_nickname VARCHAR(50),
	song_id UUID,
	employee_passport_id UUID,
	equipment_name VARCHAR(50),
	FOREIGN KEY (artist_nickname) REFERENCES ARTISTS (nickname),
	FOREIGN KEY (song_id) REFERENCES SONGS (id),
	FOREIGN KEY (employee_passport_id) REFERENCES EMPLOYEES (passport_id),
	FOREIGN KEY (equipment_name) REFERENCES EQUIPMENT (name)
);
 CREATE TABLE ALBUM_STYLE (
 	 id UUID PRIMARY KEY,
	 album_id UUID,
	 genre_id UUID,
	 FOREIGN KEY (album_id) REFERENCES ALBUMS (id),
	 FOREIGN KEY (genre_id) REFERENCES GENRES (id)
 );




