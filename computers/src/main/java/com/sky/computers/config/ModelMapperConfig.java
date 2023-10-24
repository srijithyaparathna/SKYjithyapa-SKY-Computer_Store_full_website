package com.sky.computers.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.lang.reflect.MalformedParameterizedTypeException;

@Configuration
public class ModelMapperConfig {
    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }
}
