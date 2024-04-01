package com.practice.studio.service.impl;

import com.practice.studio.dto.AlbumDto;
import com.practice.studio.entity.Album;
import com.practice.studio.exception.ResourceNotFoundException;
import com.practice.studio.mapper.AlbumMapper;
import com.practice.studio.repository.AlbumRepository;
import com.practice.studio.service.AlbumService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class AlbumServiceImpl implements AlbumService {
    private AlbumRepository albumRepository;

    @Override
    public AlbumDto createAlbum(AlbumDto albumDto) {
        Album album = AlbumMapper.mapToAlbum(albumDto);
        Album savedAlbum = albumRepository.save(album);
        return AlbumMapper.mapToAlbumDto(savedAlbum);
    }

    @Override
    public AlbumDto getAlbumById(Long albumId) {
        Album album = albumRepository.findById(albumId).orElseThrow(() ->
                new ResourceNotFoundException(STR.
                        "Album doesn't exist with given id: \{albumId}"));
        return AlbumMapper.mapToAlbumDto(album);
    }

    @Override
    public List<AlbumDto> getAllAlbums() {
        List<Album> albums = albumRepository.findAll();
        return albums.stream().map(AlbumMapper::mapToAlbumDto)
                .collect(Collectors.toList());
    }

    @Override
    public AlbumDto updateAlbum(Long albumId, AlbumDto updatedAlbum) {
        Album album = albumRepository.findById(albumId).orElseThrow(() ->
                new ResourceNotFoundException(STR.
                        "Album doesn't exist with given id: \{albumId}"));
        album.setName(updatedAlbum.getName());
        album.setSongs(updatedAlbum.getSongs());
        Album updatedAlbumObj = albumRepository.save(album);
        return AlbumMapper.mapToAlbumDto(updatedAlbumObj);
    }

    @Override
    public void deleteAlbum(Long albumId) {
        Album album = albumRepository.findById(albumId).orElseThrow(() ->
                new ResourceNotFoundException(STR.
                        "Album doesn't exist with given id: \{albumId}"));
        albumRepository.deleteById(albumId);
    }
}
