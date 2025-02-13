package com.psychometrics.back.repositories;

import com.psychometrics.back.entities.TestContentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestContentRepository extends JpaRepository<TestContentEntity, Long> {

}
