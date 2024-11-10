package com.data.collection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "com.data.collection")
@EnableJpaRepositories("com.data.collection.repository")
public class Application {
    public static void main(String[] args) {
        try {
            Connection conexao = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres", "postgres", "admin");
            if (conexao != null) {
                System.out.println("Deu certo uhuuul!");
            } else {
                System.out.println("Deu errado affe");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } 
        SpringApplication.run(Application.class, args);
    }
}