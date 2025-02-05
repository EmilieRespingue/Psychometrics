package com.psychometrics.back.controllers;

import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloController {

	@Autowired
	DataSource dataSource;
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
		message.put("content", "Coucou Gargax !");
		System.out.println("@@DATA SOURCE 2 " + dataSource);
        return ResponseEntity.ok(message);
    }
}
