package com.practice.studio.repository;

import com.practice.studio.entity.Recording;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecordingRepository extends JpaRepository<Recording, Long> {
}
