package com.practice.studio.dto;

import com.practice.studio.entity.Album;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SongDto {
    private long id;
    private String name;
    private Album album;
}
