package com.practice.studio.dto;

import com.practice.studio.entity.Artist;
import com.practice.studio.entity.Employee;
import com.practice.studio.entity.Song;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RecordingDto {
    private Long id;
    private Artist artist;
    private Employee employee;
    private Song song;
    private LocalDate date;
}
