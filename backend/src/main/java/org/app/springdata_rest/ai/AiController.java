package org.app.springdata_rest.ai;

import org.app.springdata_rest.model.Car;
import org.app.springdata_rest.model.CarRepository;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins = "http://localhost:3000")
public class AiController {

    private final ChatClient chatClient;
    private final CarRepository carRepository;

    public AiController(ChatClient.Builder chatClientBuilder, CarRepository carRepository) {
        this.chatClient = chatClientBuilder.build();
        this.carRepository = carRepository;
    }

    @PostMapping("/advisor")
    public Map<String, String> carAdvisor(@RequestBody Map<String, String> request) {

        String userNeed = request.get("message");

        StringBuilder carsList = new StringBuilder();

        carRepository.findAll().forEach(car -> {
            carsList.append("- ")
                    .append(car.getBrand()).append(" ")
                    .append(car.getModel())
                    .append(", color: ").append(car.getColor())
                    .append(", year: ").append(car.getManufacturingYear())
                    .append(", price: ").append(car.getPrice())
                    .append(" MAD")
                    .append("\n");
        });

        String response = chatClient.prompt()
                .system("""
                        You are an AI car advisor for a Car Shop application.
                        You must recommend cars ONLY from the available car list provided.
                        Do not invent cars that are not in the list.
                        If no car matches exactly, suggest the closest available option.
                        Give a short and clear recommendation.
                        """)
                .user("""
                        User need:
                        %s
                        
                        Available cars:
                        %s
                        """.formatted(userNeed, carsList.toString()))
                .call()
                .content();

        return Map.of("response", response);
    }
}