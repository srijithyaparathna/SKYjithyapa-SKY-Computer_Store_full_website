package com.skycomputers.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//to enable the resource server to serve images

@Configuration
public class ResourceConfig implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(@org.jetbrains.annotations.NotNull org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/uploads/**").addResourceLocations("file:uploads/");
        // this means that any request that comes to /uploads/** will be served from the folder uploads
        //example: http://localhost:8080/uploads/1.jpg

    }
}
