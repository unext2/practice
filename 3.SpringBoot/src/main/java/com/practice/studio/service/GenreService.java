package com.practice.studio.service;

import com.practice.studio.dto.GenreDto;

public interface GenreService {
    GenreDto createGenre(GenreDto genreDto);

    GenreDto getGenreById(Long genreId);
}
