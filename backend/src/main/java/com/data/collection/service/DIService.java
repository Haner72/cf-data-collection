package com.data.collection.service;

import com.data.collection.model.DIModel;
import com.data.collection.repository.DIRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DIService {
    @Autowired
    private DIRepository diRepository;

    public List<DIModel> findAll() {
        return diRepository.findAll();
    }

    public DIModel save(DIModel user) {
        return diRepository.save(user);
    }
}
