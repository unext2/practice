package com.practice.studio.service.impl;

import com.practice.studio.dto.GenreDto;
import com.practice.studio.entity.Genre;
import com.practice.studio.mapper.GenreMapper;
import com.practice.studio.repository.GenreRepository;
import com.practice.studio.service.GenreService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class GenreServiceImpl implements GenreService {

    private GenreRepository genreRepository;

    @Override
    public GenreDto createGenre(GenreDto genreDto) {

        Genre genre = GenreMapper.mapToGenre(genreDto);
        Genre savedGenre = genreRepository.save(genre);
        return GenreMapper.mapToGenreDto((savedGenre));
    }

    @Override
    public GenreDto getGenreById(Long genreId) {


        return null;
    }
}
