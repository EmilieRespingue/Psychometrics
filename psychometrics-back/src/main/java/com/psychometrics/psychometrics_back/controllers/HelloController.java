package com.psychometrics.psychometrics_back.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloController {

    @GetMapping("/")
    public String sayHello() {
        return "Coucou Darwi !";
    }

    // Exemple d'un endpoint JSON
    @GetMapping("/message")
    public ResponseEntity<Map<String, String>> getMessage() {
        Map<String, String> message = new HashMap<>();
        message.put("content", "Bonjour depuis Spring Boot!");
        return ResponseEntity.ok(message);
    }
}
