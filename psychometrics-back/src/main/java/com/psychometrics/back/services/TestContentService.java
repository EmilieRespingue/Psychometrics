package com.psychometrics.back.services;

import com.psychometrics.back.entities.TestContentEntity;
import com.psychometrics.back.repositories.TestContentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestContentService {

    @Autowired
    private TestContentRepository testContentRepository;

    public List<TestContentEntity> getAllTestContent() {
        return testContentRepository.findAll();
    }
}
