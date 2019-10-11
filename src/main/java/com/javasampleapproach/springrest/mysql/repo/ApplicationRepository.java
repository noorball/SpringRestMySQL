package com.javasampleapproach.springrest.mysql.repo;

import com.javasampleapproach.springrest.mysql.model.Application;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ApplicationRepository extends CrudRepository<Application, Long> {
    List<Application> findByAge(int age);
}
