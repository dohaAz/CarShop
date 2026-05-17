package org.app.springdata_rest.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RepositoryRestResource
public interface CarRepository extends CrudRepository<Car, Long> {

    List<Car> findByModel(@Param("model") String model);

    List<Car> findByColor(@Param("color") String color);
}