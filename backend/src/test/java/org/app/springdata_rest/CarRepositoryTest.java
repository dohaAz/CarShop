package org.app.springdata_rest;

import org.app.springdata_rest.model.Car;
import org.app.springdata_rest.model.CarRepository;
import org.app.springdata_rest.model.Owner;
import org.app.springdata_rest.model.OwnerRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class CarRepositoryTest {
    @Autowired
    private CarRepository carRepository;

    @Autowired
    private OwnerRepository ownerRepository;

    @Test
    public void addCar() {
        Owner owner = new Owner("Test", "Owner");
        ownerRepository.save(owner);

        Car car = new Car("BMW", "X5", "Black", "B-123", 2022, 300000, owner);
        carRepository.save(car);

        assertThat(car.getId()).isNotNull();
    }

    @Test
    public void deleteCars() {
        Owner owner = new Owner("Test", "Owner");
        ownerRepository.save(owner);

        carRepository.save(new Car("BMW", "X5", "Black", "B-123", 2022, 300000, owner));
        carRepository.save(new Car("Audi", "A3", "White", "A-456", 2021, 250000, owner));

        carRepository.deleteAll();

        assertThat(carRepository.findAll()).isEmpty();
    }
}
