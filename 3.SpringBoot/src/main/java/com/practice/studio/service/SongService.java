package com.practice.studio.service;

import com.practice.studio.dto.SongDto;

import java.util.List;

public interface SongService {
    SongDto createSong(SongDto songDto);

    SongDto getSongById(Long songId);

    List<SongDto> getAllSongs();

    SongDto updateSong(Long songId, SongDto updatedSong);

    void deleteSong(Long songId);
}
