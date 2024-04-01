package com.practice.studio.dto;

import com.practice.studio.entity.Genre;
import com.practice.studio.entity.Song;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AlbumDto {
    private Long id;
    private String name;
    private List<Song> songs;
    private Set<Genre> genres;
}
