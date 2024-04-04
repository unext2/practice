package com.practice.studio.controller;

import com.practice.studio.dto.AlbumDto;
import com.practice.studio.service.AlbumService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("api/albums")
public class AlbumController {
    private AlbumService albumService;

    // Build Add Album REST API
    @PostMapping
    public ResponseEntity<AlbumDto> createAlbum(@RequestBody AlbumDto albumDto) {
        AlbumDto savedAlbum = albumService.createAlbum(albumDto);
        return new ResponseEntity<>(savedAlbum, HttpStatus.CREATED);
    }

    // Build Get REST API
    @GetMapping("{id}")
    public ResponseEntity<AlbumDto> getById(@PathVariable("id") Long albumId) {
        AlbumDto albumDto = albumService.getAlbumById(albumId);
        return ResponseEntity.ok(albumDto);
    }

    // Build GetAll REST API
    @GetMapping
    public ResponseEntity<List<AlbumDto>> getAll() {
        List<AlbumDto> albums = albumService.getAllAlbums();
        return ResponseEntity.ok(albums);
    }

    // Build UpdateAlbum REST API
    @PutMapping("{id}")
    public ResponseEntity<AlbumDto> updateAlbum(@PathVariable("id") Long albumId,
                                                @RequestBody AlbumDto updatedAlbum) {
        AlbumDto albumDto = albumService.updateAlbum(albumId, updatedAlbum);
        return ResponseEntity.ok(albumDto);
    }

    // Build DeleteAlbum REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteAlbum(@PathVariable("id") Long albumId) {
        albumService.deleteAlbum(albumId);
        return ResponseEntity.ok().body("{\"message\": \"Album was deleted successfully!\"}");
    }
}
