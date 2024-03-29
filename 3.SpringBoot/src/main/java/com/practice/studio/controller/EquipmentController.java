package com.practice.studio.controller;

import com.practice.studio.dto.EquipmentDto;
import com.practice.studio.service.EquipmentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/equipment")
public class EquipmentController {
    private EquipmentService equipmentService;

    // Build Add Equipment REST API
    @PostMapping
    public ResponseEntity<EquipmentDto> createEquipment(@RequestBody EquipmentDto equipmentDto) {
        EquipmentDto savedEquipment = equipmentService.createEquipment(equipmentDto);
        return new ResponseEntity<>(savedEquipment, HttpStatus.CREATED);
    }

    // Build Get REST API
    @GetMapping("{id}")
    public ResponseEntity<EquipmentDto> getById(@PathVariable("id") Long equipmentId) {
        EquipmentDto equipmentDto = equipmentService.getEquipmentById(equipmentId);
        return ResponseEntity.ok(equipmentDto);
    }

    // Build GetAll REST API
    @GetMapping
    public ResponseEntity<List<EquipmentDto>> getAll() {
        List<EquipmentDto> equipment = equipmentService.getAllEquipment();
        return ResponseEntity.ok(equipment);
    }

    // Build UpdateEquipment REST API
    @PutMapping("{id}")
    public ResponseEntity<EquipmentDto> updateEquipment(@PathVariable("id") Long equipmentId,
                                                        @RequestBody EquipmentDto updatedEquipment) {
        EquipmentDto equipmentDto = equipmentService.updateEquipment(equipmentId, updatedEquipment);
        return ResponseEntity.ok(equipmentDto);
    }

    // Build DeleteEquipment REST API
    @DeleteMapping("{id}")
    public  ResponseEntity<String> deleteEquipment(@PathVariable("id") Long equipmentId) {
        equipmentService.deleteEquipment(equipmentId);
        return ResponseEntity.ok("Equipment was deleted successfully!");
    }
}
