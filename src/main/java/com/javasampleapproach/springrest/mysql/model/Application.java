package com.javasampleapproach.springrest.mysql.model;

import javax.persistence.*;

@Entity
@Table(name = "application")
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "age")
    private int age;

    @Column(name = "room")
    private String room;

    @Column(name = "active")
    private boolean active;

    public Application() {
    }

    public Application(String name, int age, String room) {
        this.name = name;
        this.age = age;
        this.room = room;
        this.active = false;
    }

    public long getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getAge() {
        return this.age;
    }

    public void setRoom(String room) {
        this.room = room;
    }

    public String getRoom() {
        return this.room;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    @Override
    public String toString() {
        return "Application [id=" + id + ", name=" + name + ", age=" + age + ", room=" + room + ", active=" + active + "]";
    }
}
