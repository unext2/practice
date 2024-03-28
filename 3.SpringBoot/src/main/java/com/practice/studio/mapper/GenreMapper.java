package com.practice.studio.mapper;

import com.practice.studio.dto.GenreDto;
import com.practice.studio.entity.Genre;

public class GenreMapper {
    public static GenreDto mapToGenreDto(Genre genre) {
        return new GenreDto(
                genre.getId(),
                genre.getName()
        );
    }

    public static Genre mapToGenre(GenreDto genreDto) {
        return new Genre(
                genreDto.getId(),
                genreDto.getName()
        );
    }
}
