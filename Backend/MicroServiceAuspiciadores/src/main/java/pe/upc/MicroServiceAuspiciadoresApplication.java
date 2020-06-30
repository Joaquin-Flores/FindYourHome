package pe.upc;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EnableEurekaClient
public class MicroServiceAuspiciadoresApplication {

	public static void main(String[] args) {
		SpringApplication.run(MicroServiceAuspiciadoresApplication.class, args);
	}

}
@Configuration
class RestTemplateConfig {

    // Crea un bean para que restTemplate pueda llamar a los servicios REST
    @Bean
    @LoadBalanced        // Load balance entre servicios corriendo en diferentes puertos.
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}

