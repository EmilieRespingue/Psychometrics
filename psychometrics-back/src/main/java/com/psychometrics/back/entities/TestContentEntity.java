package com.psychometrics.back.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "test_content", schema = "public")

public class TestContentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "test_content_id", unique = true, nullable = false)
    private Long id;

    @Column(name = "name", nullable = false)
    String name;

    @Column(name = "text_fr", nullable = false)
    String textFr;

    @Column(name = "section")
    Integer section;

    @Column(name = "position")
    Integer position;

    @Column(name = "test_id")
    Long testId;

    public TestContentEntity() {

    }

    public TestContentEntity(Long id, String name, String textFr, Integer section, Integer position, Long testId) {
        this.id = id;
        this.name = name;
        this.textFr = textFr;
        this.section = section;
        this.position = position;
        this.testId = testId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTextFr() {
        return textFr;
    }

    public void setTextFr(String textFr) {
        this.textFr = textFr;
    }

    public Integer getSection() {
        return section;
    }

    public void setSection(Integer section) {
        this.section = section;
    }

    public Integer getPosition() {
        return position;
    }

    public void setPosition(Integer position) {
        this.position = position;
    }

    public Long getTestId() {
        return testId;
    }

    public void setTestId(Long testId) {
        this.testId = testId;
    }

    public Long getId() {
        return id;
    }

}
