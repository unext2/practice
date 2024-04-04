package com.practice.studio.controller;

import com.practice.studio.dto.RecordingDto;
import com.practice.studio.service.RecordingService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("api/recordings")
public class RecordingController {
    private RecordingService recordingService;

    // Build Add Recording REST API
    @PostMapping
    public ResponseEntity<RecordingDto> createRecording(@RequestBody RecordingDto recordingDto) {
        RecordingDto savedRecording = recordingService.createRecording(recordingDto);
        return new ResponseEntity<>(savedRecording, HttpStatus.CREATED);
    }

    // Build Get Recording REST API
    @GetMapping("{id}")
    public ResponseEntity<RecordingDto> getById(@PathVariable("id") Long recordingId) {
        RecordingDto recordingDto = recordingService.getRecordingById(recordingId);
        return ResponseEntity.ok(recordingDto);
    }

    // Build GetAll Recordings REST API
    @GetMapping
    public ResponseEntity<List<RecordingDto>> getAll() {
        List<RecordingDto> recordings = recordingService.getAllRecordings();
        return ResponseEntity.ok(recordings);
    }

    // Build UpdateRecording REST API
    @PutMapping("{id}")
    public ResponseEntity<RecordingDto> updateRecording(@PathVariable("id") Long recordingId,
                                                        @RequestBody RecordingDto updatedRecording) {
        RecordingDto recordingDto = recordingService.updateRecording(recordingId, updatedRecording);
        return ResponseEntity.ok(recordingDto);
    }

    // Build DeleteRecording REST API
    @DeleteMapping
    public ResponseEntity<String> deleteRecording(@PathVariable("id") Long recordingId) {
        recordingService.deleteRecording(recordingId);
        return ResponseEntity.ok().body("{\"message\": \"Recording was deleted successfully!\"}");
    }
}
