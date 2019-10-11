package com.javasampleapproach.springrest.mysql.controller;

import com.javasampleapproach.springrest.mysql.model.Application;
import com.javasampleapproach.springrest.mysql.repo.ApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ApplicationController {

    @Autowired
    ApplicationRepository repository;

    @GetMapping("/applications")
    public List<Application> getAllApplications() {
        System.out.println("Get all Applications...");

        List<Application> applications = new ArrayList<>();
        repository.findAll().forEach(applications::add);

        return applications;
    }

    @PostMapping(value = "/applications/create")
    public Application postApplication(@RequestBody Application application) {

        Application _application = repository.save(new Application(application.getName(), application.getAge(), application.getRoom()));
        return _application;
    }

    @DeleteMapping("/applications/{id}")
    public ResponseEntity<String> deleteApplication(@PathVariable("id") long id) {
        System.out.println("Delete Application with ID = " + id + "...");

        repository.deleteById(id);

        return new ResponseEntity<>("Application has been deleted!", HttpStatus.OK);
    }

    @DeleteMapping("/applications/delete")
    public ResponseEntity<String> deleteAllApplications() {
        System.out.println("Delete All Applications...");

        repository.deleteAll();

        return new ResponseEntity<>("All applications have been deleted!", HttpStatus.OK);
    }

    @GetMapping(value = "applications/age/{age}")
    public List<Application> findByAge(@PathVariable int age) {

        List<Application> applications = repository.findByAge(age);
        return applications;
    }

    @PutMapping("/applications/{id}")
    public ResponseEntity<Application> updateApplication(@PathVariable("id") long id, @RequestBody Application application) {
        System.out.println("Update Application with ID = " + id + "...");

        Optional<Application> applicationData = repository.findById(id);

        if (applicationData.isPresent()) {
            Application _application = applicationData.get();
            _application.setName(application.getName());
            _application.setAge(application.getAge());
            _application.setActive(application.isActive());
            return new ResponseEntity<>(repository.save(_application), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
