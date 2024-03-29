package com.practice.studio.controller;

import com.practice.studio.dto.GenreDto;
import com.practice.studio.service.GenreService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/genres")
public class GenreController {
    private GenreService genreService;

    // Build Add Genre REST API
    @PostMapping
    public ResponseEntity<GenreDto> createGenre(@RequestBody GenreDto genreDto) {
        GenreDto savedGenre = genreService.createGenre(genreDto);
        return new ResponseEntity<>(savedGenre, HttpStatus.CREATED);
    }

    // Build Get REST API
    @GetMapping("{id}")
    public ResponseEntity<GenreDto> getById(@PathVariable("id") Long genreId) {
        GenreDto genreDto = genreService.getGenreById(genreId);
        return ResponseEntity.ok(genreDto);
    }

    // Build GetAll REST API
    @GetMapping
    public ResponseEntity<List<GenreDto>> getAll() {
        List<GenreDto> genres = genreService.getAllGenres();
        return ResponseEntity.ok(genres);
    }

    // Build UpdateGenre REST API
    @PutMapping("{id}")
    public ResponseEntity<GenreDto> updateGenre(@PathVariable("id") Long genreId,
                                                @RequestBody GenreDto updatedGenre) {
        GenreDto genreDto = genreService.updateGenre(genreId, updatedGenre);
        return ResponseEntity.ok(genreDto);
    }

    // Build DeleteGenre REST API
    @DeleteMapping("{id}")
    public  ResponseEntity<String> deleteGenre(@PathVariable("id") Long genreId) {
        genreService.deleteGenre(genreId);
        return ResponseEntity.ok("Genre was deleted successfully!");
    }
}
