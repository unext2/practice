package com.practice.studio.service.impl;

import com.practice.studio.dto.ArtistDto;
import com.practice.studio.entity.Artist;
import com.practice.studio.exception.ResourceNotFoundException;
import com.practice.studio.mapper.ArtistMapper;
import com.practice.studio.repository.ArtistRepository;
import com.practice.studio.service.ArtistService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ArtistServiceImpl implements ArtistService {
    private ArtistRepository artistRepository;

    @Override
    public ArtistDto createArtist(ArtistDto artistDto) {
        Artist artist = ArtistMapper.mapToArtist(artistDto);
        Artist savedArtist = artistRepository.save(artist);
        return ArtistMapper.mapToArtistDto(savedArtist);
    }

    @Override
    public ArtistDto getArtistById(Long artistId) {
        Artist artist = artistRepository.findById(artistId).orElseThrow(() ->
                new ResourceNotFoundException(STR.
                        "Artist doesn't exist with given id: \{artistId}"));
        return ArtistMapper.mapToArtistDto(artist);
    }

    @Override
    public List<ArtistDto> getAllArtists() {
        List<Artist> artists = artistRepository.findAll();
        return artists.stream().map(ArtistMapper::mapToArtistDto)
                .collect(Collectors.toList());
    }

    @Override
    public ArtistDto updateArtist(Long artistId, ArtistDto updatedArtist) {
        Artist artist = artistRepository.findById(artistId).orElseThrow(() ->
                new ResourceNotFoundException(STR.
                        "Artist doesn't exist with given id: \{artistId}"));
        artist.setName(updatedArtist.getName());
        Artist updatedArtistObj = artistRepository.save(artist);
        return ArtistMapper.mapToArtistDto(updatedArtistObj);
    }

    @Override
    public void deleteArtist(Long artistId) {
        Artist artist = artistRepository.findById(artistId).orElseThrow(() ->
                new ResourceNotFoundException(STR.
                        "Artist doesn't exist with given id: \{artistId}"));
        artistRepository.deleteById(artistId);
    }
}
