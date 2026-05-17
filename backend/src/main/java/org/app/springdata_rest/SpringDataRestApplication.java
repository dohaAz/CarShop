package org.app.springdata_rest;

import org.app.springdata_rest.model.Car;
import org.app.springdata_rest.model.CarRepository;
import org.app.springdata_rest.model.Owner;
import org.app.springdata_rest.model.OwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SpringDataRestApplication {

//    public static void main(String[] args) {
//        SpringApplication.run(SpringDataRestApplication.class, args);
//    }

    @Autowired
    private CarRepository carRepository;


    @Autowired
    private OwnerRepository ownerRepository;


    public static void main(String[] args) {
        SpringApplication.run(SpringDataRestApplication.class, args);
    }

    @Bean
    CommandLineRunner runner() {
        return args -> {
            Owner owner1 = new Owner("Ali", "Hassan");
            Owner owner2 = new Owner("Najat", "Bani");

            ownerRepository.save(owner1);
            ownerRepository.save(owner2);

            carRepository.save(new Car("Toyota", "Corolla", "Gray", "A-1-9090", 2018, 95000, owner1));
            carRepository.save(new Car("Ford", "Fiesta", "Red", "A-2-8090", 2015, 90000, owner1));
            carRepository.save(new Car("Honda", "CRV", "Blue", "A-3-7090", 2016, 140000, owner2));
        };
    }

}
