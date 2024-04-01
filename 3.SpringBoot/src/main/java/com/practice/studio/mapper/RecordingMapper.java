package com.practice.studio.mapper;

import com.practice.studio.dto.RecordingDto;
import com.practice.studio.entity.Recording;

public class RecordingMapper {
    public static RecordingDto mapToRecordDto(Recording recording) {
        return new RecordingDto(
                recording.getId(),
                recording.getArtist(),
                recording.getEmployee(),
                recording.getSong(),
                recording.getDate()
        );
    }

    public static Recording mapToRecord(RecordingDto recordingDto) {
        return new Recording(
                recordingDto.getId(),
                recordingDto.getArtist(),
                recordingDto.getEmployee(),
                recordingDto.getSong(),
                recordingDto.getDate()
        );
    }
}
