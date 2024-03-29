package com.practice.studio.mapper;

import com.practice.studio.dto.EquipmentDto;
import com.practice.studio.entity.Equipment;

public class EquipmentMapper {
    public static EquipmentDto mapToEquipmentDto(Equipment equipment) {
        return new EquipmentDto(
                equipment.getId(),
                equipment.getName()
        );
    }

    public static Equipment mapToEquipment(EquipmentDto equipmentDto) {
        return new Equipment(
                equipmentDto.getId(),
                equipmentDto.getName()
        );
    }
}
