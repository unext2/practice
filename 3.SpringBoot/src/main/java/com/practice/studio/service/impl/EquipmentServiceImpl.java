package com.practice.studio.service.impl;

import com.practice.studio.dto.EquipmentDto;
import com.practice.studio.entity.Equipment;
import com.practice.studio.exception.ResourceNotFoundException;
import com.practice.studio.mapper.EquipmentMapper;
import com.practice.studio.repository.EquipmentRepository;
import com.practice.studio.service.EquipmentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EquipmentServiceImpl implements EquipmentService {
    private EquipmentRepository equipmentRepository;

    @Override
    public EquipmentDto createEquipment(EquipmentDto equipmentDto) {
        Equipment equipment = EquipmentMapper.mapToEquipment(equipmentDto);
        Equipment savedEquipment = equipmentRepository.save(equipment);
        return EquipmentMapper.mapToEquipmentDto(savedEquipment);
    }

    @Override
    public EquipmentDto getEquipmentById(Long equipmentId) {
        Equipment equipment = equipmentRepository.findById(equipmentId).orElseThrow(() ->
                new ResourceNotFoundException(STR.
                        "Equipment doesn't exist with given id: \{equipmentId}"));
        return EquipmentMapper.mapToEquipmentDto(equipment);
    }

    @Override
    public List<EquipmentDto> getAllEquipment() {
        List<Equipment> equipment = equipmentRepository.findAll();
        return equipment.stream().map(EquipmentMapper::mapToEquipmentDto)
                .collect(Collectors.toList());
    }

    @Override
    public EquipmentDto updateEquipment(Long equipmentId, EquipmentDto updatedEquipment) {
        Equipment equipment = equipmentRepository.findById(equipmentId).orElseThrow(() ->
                new ResourceNotFoundException(STR.
                        "Equipment doesn't exist with given id: \{equipmentId}"));
        equipment.setName(updatedEquipment.getName());
        Equipment updatedEquipmentObj = equipmentRepository.save(equipment);
        return EquipmentMapper.mapToEquipmentDto(updatedEquipmentObj);
    }

    @Override
    public void deleteEquipment(Long equipmentId) {
        Equipment equipment = equipmentRepository.findById(equipmentId).orElseThrow(() ->
                new ResourceNotFoundException(STR.
                        "Equipment doesn't exist with given id: \{equipmentId}"));
        equipmentRepository.deleteById(equipmentId);
    }
}
