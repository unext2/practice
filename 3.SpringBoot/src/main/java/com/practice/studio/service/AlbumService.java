package com.practice.studio.service;

import com.practice.studio.dto.AlbumDto;

import java.util.List;

public interface AlbumService {
    AlbumDto createAlbum(AlbumDto albumDto);

    AlbumDto getAlbumById(Long albumId);

    List<AlbumDto> getAllAlbums();

    AlbumDto updateAlbum(Long albumId, AlbumDto updatedAlbum);

    void deleteAlbum(Long albumId);
}
