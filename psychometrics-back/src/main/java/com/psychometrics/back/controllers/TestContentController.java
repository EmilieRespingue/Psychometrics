package com.psychometrics.back.controllers;

import com.psychometrics.back.entities.TestContentEntity;
import com.psychometrics.back.services.TestContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/test-content")
public class TestContentController {

    @Autowired
    private TestContentService testContentService;

    @GetMapping
    public ResponseEntity<List<TestContentEntity>> getAllTestContent() {
        List<TestContentEntity> testContents = testContentService.getAllTestContent();
        return ResponseEntity.ok(testContents);
    }
}
