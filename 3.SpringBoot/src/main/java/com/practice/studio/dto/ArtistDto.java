package com.practice.studio.dto;

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
public class ArtistDto {
    private Long id;
    private String name;
    private List<Recording> recordings;
}
