package com.psychometrics.back.controllers;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloController {

    @GetMapping("/coucou")
    public ResponseEntity<Map<String, String>> sayHello() {
        Map<String, String> message = new HashMap<>();
        message.put("content", "Coucou Darwi !");
        return ResponseEntity.ok(message);
    }

    // Exemple d'un endpoint JSON
    @GetMapping("/message")
    public ResponseEntity<Map<String, String>> getMessage() {
        Map<String, String> message = new HashMap<>();
        message.put("content", "Coucou Garga !");
        return ResponseEntity.ok(message);
    }
}
