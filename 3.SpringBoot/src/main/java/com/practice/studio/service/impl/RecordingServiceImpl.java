package com.practice.studio.service.impl;

import com.practice.studio.dto.RecordingDto;
import com.practice.studio.entity.Recording;
import com.practice.studio.exception.ResourceNotFoundException;
import com.practice.studio.mapper.RecordingMapper;
import com.practice.studio.repository.RecordingRepository;
import com.practice.studio.service.RecordingService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class RecordingServiceImpl implements RecordingService {
    private RecordingRepository recordingRepository;

    @Override
    public RecordingDto createRecording(RecordingDto recordingDto) {
        Recording recording = RecordingMapper.mapToRecord(recordingDto);
        Recording savedRecording = recordingRepository.save(recording);
        return RecordingMapper.mapToRecordDto(savedRecording);
    }

    @Override
    public RecordingDto getRecordingById(Long recordingId) {
        Recording recording = recordingRepository.findById(recordingId).orElseThrow(() ->
                new ResourceNotFoundException(STR.
                        "Recording doesn't exist with given id: \{recordingId}"));
        return RecordingMapper.mapToRecordDto(recording);
    }

    @Override
    public List<RecordingDto> getAllRecordings() {
        List<Recording> recordings = recordingRepository.findAll();
        return recordings.stream().map(RecordingMapper::mapToRecordDto)
                .collect(Collectors.toList());
    }

    @Override
    public RecordingDto updateRecording(Long recordingId, RecordingDto updatedRecording) {
        Recording recording = recordingRepository.findById(recordingId).orElseThrow(() ->
                new ResourceNotFoundException(STR.
                        "Recording doesn't exist with given id: \{recordingId}"));
        recording.setArtist(updatedRecording.getArtist());
        recording.setEmployee(updatedRecording.getEmployee());
        recording.setSong(updatedRecording.getSong());
        recording.setDate(updatedRecording.getDate());
        Recording updatedRecordingObj = recordingRepository.save(recording);
        return RecordingMapper.mapToRecordDto(updatedRecordingObj);
    }

    @Override
    public void deleteRecording(Long recordingId) {
        Recording recording = recordingRepository.findById(recordingId).orElseThrow(() ->
                new ResourceNotFoundException(STR.
                        "Recording doesn't exist with given id: \{recordingId}"));
        recordingRepository.deleteById(recordingId);
    }
}
