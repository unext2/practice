package com.practice.studio.mapper;

import com.practice.studio.dto.SongDto;
import com.practice.studio.entity.Song;

public class SongMapper {
    public static SongDto mapToSongDto(Song song) {
        return new SongDto(
                song.getId(),
                song.getName(),
                song.getAlbum(),
                song.getRecordings()
        );
    }

    public static Song mapToSong(SongDto songDto) {
        return new Song(
                songDto.getId(),
                songDto.getName(),
                songDto.getAlbum(),
                songDto.getRecordings()
        );
    }
}
