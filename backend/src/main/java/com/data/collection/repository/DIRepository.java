package com.data.collection.repository;

import com.data.collection.model.DIModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DIRepository extends JpaRepository<DIModel, Long> {
}
