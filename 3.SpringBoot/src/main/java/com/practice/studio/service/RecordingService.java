package com.practice.studio.service;

import com.practice.studio.dto.RecordingDto;

import java.util.List;

public interface RecordingService {
    RecordingDto createRecording(RecordingDto recordingDto);

    RecordingDto getRecordingById(Long recordingId);

    List<RecordingDto> getAllRecordings();

    RecordingDto updateRecording(Long recordingId, RecordingDto updatedRecording);

    void deleteRecording(Long recordingId);
}
