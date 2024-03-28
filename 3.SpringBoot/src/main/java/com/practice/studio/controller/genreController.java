package com.practice.studio.controller;

import com.practice.studio.dto.GenreDto;
import com.practice.studio.service.GenreService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api/genres")
public class genreController {

    private GenreService genreService;

    // Build Add Genre REST API
    @PostMapping
    public ResponseEntity<GenreDto> createGenre(@RequestBody GenreDto genreDto) {
        GenreDto savedGenre = genreService.createGenre(genreDto);
        return new ResponseEntity<>(savedGenre, HttpStatus.CREATED);
    }

}
