package com.data.collection.service;

import com.data.collection.model.UsersModel;
import com.data.collection.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsersService {

    @Autowired
    private UsersRepository userRepository;

    public List<UsersModel> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<UsersModel> getUserById(long id) {
        return userRepository.findById(id);
    } 

    public UsersModel saveUser(UsersModel user) {
        return userRepository.save(user);
    }

    public boolean deleteUser(Long id) {
        Optional<UsersModel> userOptional = userRepository.findById(id);
        if (userOptional.isPresent()) {
            userRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
