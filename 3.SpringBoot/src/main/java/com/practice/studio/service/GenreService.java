package com.practice.studio.service;

import com.practice.studio.dto.GenreDto;

import java.util.List;

public interface GenreService {
    GenreDto createGenre(GenreDto genreDto);

    GenreDto getGenreById(Long genreId);

    List<GenreDto> getAllGenres();

    GenreDto updateGenre(Long genreId, GenreDto updatedGenre);

    void deleteGenre(Long genreId);
}
