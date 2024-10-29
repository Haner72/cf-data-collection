package com.data.collection.controller;

import com.data.collection.model.DIModel;
import com.data.collection.service.DIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class DIController {
    @Autowired
    private DIService diService;

    @GetMapping
    public List<DIModel> getAllModels() {
        return diService.findAll();
    }

    @PostMapping
    public DIModel createUser(@RequestBody DIModel user) {
        return diService.save(user);
    }
}
