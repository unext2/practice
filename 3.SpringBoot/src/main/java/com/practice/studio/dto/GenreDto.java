package com.practice.studio.dto;

import com.practice.studio.entity.Album;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class GenreDto {
    private Long id;
    private String name;
    private Set<Album> albums;
}
