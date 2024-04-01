package com.practice.studio.service.impl;

import com.practice.studio.dto.GenreDto;
import com.practice.studio.entity.Genre;
import com.practice.studio.exception.ResourceNotFoundException;
import com.practice.studio.mapper.GenreMapper;
import com.practice.studio.repository.GenreRepository;
import com.practice.studio.service.GenreService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class GenreServiceImpl implements GenreService {
    private GenreRepository genreRepository;

    @Override
    public GenreDto createGenre(GenreDto genreDto) {
        Genre genre = GenreMapper.mapToGenre(genreDto);
        Genre savedGenre = genreRepository.save(genre);
        return GenreMapper.mapToGenreDto(savedGenre);
    }

    @Override
    public GenreDto getGenreById(Long genreId) {
        Genre genre = genreRepository.findById(genreId).orElseThrow(() ->
                new ResourceNotFoundException(STR.
                        "Genre doesn't exist with given id: \{genreId}"));
        return GenreMapper.mapToGenreDto(genre);
    }

    @Override
    public List<GenreDto> getAllGenres() {
        List<Genre> genres = genreRepository.findAll();
        return genres.stream().map(GenreMapper::mapToGenreDto)
                .collect(Collectors.toList());
    }

    @Override
    public GenreDto updateGenre(Long genreId, GenreDto updatedGenre) {
        Genre genre = genreRepository.findById(genreId).orElseThrow(() ->
                new ResourceNotFoundException(STR.
                        "Genre doesn't exist with given id: \{genreId}"));
        genre.setName(updatedGenre.getName());
        genre.setAlbums(updatedGenre.getAlbums());
        Genre updatedGenreObj = genreRepository.save(genre);
        return GenreMapper.mapToGenreDto(updatedGenreObj);
    }

    @Override
    public void deleteGenre(Long genreId) {
        Genre genre = genreRepository.findById(genreId).orElseThrow(() ->
                new ResourceNotFoundException(STR.
                        "Genre doesn't exist with given id: \{genreId}"));
        genreRepository.deleteById(genreId);
    }
}
