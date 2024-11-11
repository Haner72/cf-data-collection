package com.data.collection.controller;

import com.data.collection.model.AuthenticationRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/authenticate")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthenticationController {

    private static final String AUTH_PASSWORD = "1234";

    @PostMapping
    public ResponseEntity<String> authenticate(@RequestBody AuthenticationRequest authRequest) {
        if (authRequest.getPassword().equals(AUTH_PASSWORD)) {
            return ResponseEntity.ok("Autenticação bem-sucedida");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Senha incorreta");
        }
    }
}
