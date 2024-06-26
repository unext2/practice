package com.practice.studio.mapper;

import com.practice.studio.dto.AlbumDto;
import com.practice.studio.entity.Album;

public class AlbumMapper {
    public static AlbumDto mapToAlbumDto(Album album) {
        return new AlbumDto(
                album.getId(),
                album.getName(),
                album.getSongs(),
                album.getGenres()
        );
    }

    public static Album mapToAlbum(AlbumDto albumDto) {
        return new Album(
                albumDto.getId(),
                albumDto.getName(),
                albumDto.getSongs(),
                albumDto.getGenres()
        );
    }
}
