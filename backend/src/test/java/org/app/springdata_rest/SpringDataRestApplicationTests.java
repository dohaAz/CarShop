package org.app.springdata_rest;

import org.app.springdata_rest.web.CarController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class SpringDataRestApplicationTests {

    @Autowired
    private CarController carController;

    @Test
    void contextLoads() {
        assertThat(carController).isNotNull();
    }

}




