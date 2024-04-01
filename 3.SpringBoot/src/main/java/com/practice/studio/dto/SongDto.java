package com.practice.studio.dto;

import com.practice.studio.entity.Album;
import com.practice.studio.entity.Recording;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SongDto {
    private long id;
    private String name;
    private Album album;
    private List<Recording> recordings;
}
