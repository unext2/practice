package com.practice.studio.controller;

import com.practice.studio.dto.ArtistDto;
import com.practice.studio.service.ArtistService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/artists")
public class ArtistController {
    private ArtistService artistService;

    // Build Add Artist REST API
    @PostMapping
    public ResponseEntity<ArtistDto> createArtist(@RequestBody ArtistDto artistDto) {
        ArtistDto savedArtist = artistService.createArtist(artistDto);
        return new ResponseEntity<>(savedArtist, HttpStatus.CREATED);
    }

    // Build Get REST API
    @GetMapping("{id}")
    public ResponseEntity<ArtistDto> getById(@PathVariable("id") Long artistId) {
        ArtistDto artistDto = artistService.getArtistById(artistId);
        return ResponseEntity.ok(artistDto);
    }

    // Build GetAll REST API
    @GetMapping
    public ResponseEntity<List<ArtistDto>> getAll() {
        List<ArtistDto> artists = artistService.getAllArtists();
        return ResponseEntity.ok(artists);
    }

    // Build UpdateArtist REST API
    @PutMapping("{id}")
    public ResponseEntity<ArtistDto> updateArtist(@PathVariable("id") Long artistId,
                                                  @RequestBody ArtistDto updatedArtist) {
        ArtistDto artistDto = artistService.updateArtist(artistId, updatedArtist);
        return ResponseEntity.ok(artistDto);
    }

    // Build DeleteArtist REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteArtist(@PathVariable("id") Long artistId) {
        artistService.deleteArtist(artistId);
        return ResponseEntity.ok().body("{\"message\": \"Artist was deleted successfully!\"}");
    }
}
