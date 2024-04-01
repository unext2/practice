package com.practice.studio.controller;

import com.practice.studio.dto.SongDto;
import com.practice.studio.service.SongService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/songs")
public class SongController {
    private SongService songService;

    // Build Add Song REST API
    @PostMapping
    public ResponseEntity<SongDto> createSong(@RequestBody SongDto songDto) {
        SongDto savedSong = songService.createSong(songDto);
        return new ResponseEntity<>(savedSong, HttpStatus.OK);
    }

    // Build Get Song REST API
    @GetMapping("{id}")
    public ResponseEntity<SongDto> getById(@PathVariable("id") Long songId) {
        SongDto songDto = songService.getSongById(songId);
        return ResponseEntity.ok(songDto);
    }

    // Build Get All Songs REST API
    @GetMapping
    public  ResponseEntity<List<SongDto>> getAll() {
        List<SongDto> songs = songService.getAllSongs();
        return ResponseEntity.ok(songs);
    }

    // Build UpdateSong REST API
    @PutMapping("{id}")
    public ResponseEntity<SongDto> updateSong(@PathVariable("id") Long songId,
                                              @RequestBody SongDto updatedSong) {
        SongDto songDto = songService.updateSong(songId, updatedSong);
        return ResponseEntity.ok(songDto);
    }

    // Build DeleteSong REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteSong(@PathVariable("id") Long songId) {
        songService.deleteSong(songId);
        return ResponseEntity.ok("Song was deleted successfully!");
    }
}
