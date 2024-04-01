package com.practice.studio.service.impl;

import com.practice.studio.dto.SongDto;
import com.practice.studio.entity.Song;
import com.practice.studio.exception.ResourceNotFoundException;
import com.practice.studio.mapper.SongMapper;
import com.practice.studio.repository.SongRepository;
import com.practice.studio.service.SongService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class SongServiceImpl implements SongService {
    private SongRepository songRepository;

    @Override
    public SongDto createSong(SongDto songDto) {
        Song song = SongMapper.mapToSong(songDto);
        Song savedSong = songRepository.save(song);
        return SongMapper.mapToSongDto(savedSong);
    }

    @Override
    public SongDto getSongById(Long songId) {
        Song song = songRepository.findById(songId).orElseThrow(() ->
                new ResourceNotFoundException(STR.
                        "Song doesn't exists with given id: \{songId}"));
        return SongMapper.mapToSongDto(song);
    }

    @Override
    public List<SongDto> getAllSongs() {
        List<Song> songs = songRepository.findAll();
        return songs.stream().map(SongMapper::mapToSongDto)
                .collect(Collectors.toList());
    }

    @Override
    public SongDto updateSong(Long songId, SongDto updatedSong) {
        Song song = songRepository.findById(songId).orElseThrow(() ->
                new ResourceNotFoundException(STR.
                        "Song doesn't exists with given id: \{songId}"));
        song.setName(updatedSong.getName());
        song.setAlbum(updatedSong.getAlbum());
        song.setRecordings(updatedSong.getRecordings());
        Song updatedSongObj = songRepository.save(song);
        return SongMapper.mapToSongDto(updatedSongObj);
    }

    @Override
    public void deleteSong(Long songId) {
        Song song = songRepository.findById(songId).orElseThrow(() ->
                new ResourceNotFoundException(STR.
                        "Song doesn't exists with given id: \{songId}"));
        songRepository.deleteById(songId);
    }
}
