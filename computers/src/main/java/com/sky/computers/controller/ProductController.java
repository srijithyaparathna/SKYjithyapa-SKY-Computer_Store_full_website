package com.sky.computers.controller;

import com.sky.computers.dto.ProductDTO;
import com.sky.computers.dto.ProductSaveRequest;
import com.sky.computers.entity.Product;
import com.sky.computers.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(
        "/api/v1/product"
)
@CrossOrigin
public class ProductController {
    @Autowired
    private ProductService productService;

    @PostMapping("/")
    public ResponseEntity<Product> SaveItem(
            @RequestBody ProductSaveRequest productSaveRequest
    )
    {
        Product product = productService.saveProduct(productSaveRequest);

        return product;

    }


}
