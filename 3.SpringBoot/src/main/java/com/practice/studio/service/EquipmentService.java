package com.practice.studio.service;

import com.practice.studio.dto.EquipmentDto;

import java.util.List;

public interface EquipmentService {
    EquipmentDto createEquipment(EquipmentDto equipmentDto);

    EquipmentDto getEquipmentById(Long equipmentId);

    List<EquipmentDto> getAllEquipment();

    EquipmentDto updateEquipment(Long equipmentId, EquipmentDto updatedEquipment);

    void deleteEquipment(Long equipmentId);
}
