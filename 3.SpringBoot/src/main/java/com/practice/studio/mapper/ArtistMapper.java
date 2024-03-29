package com.practice.studio.mapper;

import com.practice.studio.dto.ArtistDto;
import com.practice.studio.entity.Artist;

public class ArtistMapper {
    public static ArtistDto mapToArtistDto(Artist artist) {
        return new ArtistDto(
                artist.getId(),
                artist.getName()
        );
    }

     public static Artist mapToArtist(ArtistDto artistDto) {
        return new Artist(
                artistDto.getId(),
                artistDto.getName()
        );
     }
}
