package com.psychometrics.back.controllers;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
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

    // Exemple endpoint JSON Chats qui est affiché dans le localhost: 8080/chats
    @GetMapping("/chats")
    public ResponseEntity<List<Map<String, String>>> getChats() {
        List<Map<String, String>> chats = new ArrayList<>();
        try {
            CallableStatement statement = dataSource.getConnection()
                    .prepareCall("SELECT chat_id, name, color FROM public.chats;");
            ResultSet resultSet = statement.executeQuery();
            ResultSetMetaData rsmd = resultSet.getMetaData();
            int columnsNumber = rsmd.getColumnCount();
            while (resultSet.next()) {
                Map<String, String> chat = new HashMap<>();
                for (int i = 1; i <= columnsNumber; i++) {
                    String columnValue = resultSet.getString(i);
                    chat.put(rsmd.getColumnName(i), columnValue);
                }
                chats.add(chat);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok(chats);
    }
}
