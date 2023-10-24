package com.skycomputers.backend.Controller;

import com.skycomputers.backend.Models.Products;
import com.skycomputers.backend.Service.ProductServices;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")

public class ProductController {

    private ProductServices service;


    public ProductController(ProductServices service) {
        this.service = service;
    }

    @GetMapping("/product")
    public List<Products> getAllProducts() {
        return service.getAllProducts();

    }

    @GetMapping("/product/{id}")
        public ResponseEntity<Products> getoneproduct(@PathVariable int id){

        return service.getOneProduct(id);
    }
    @GetMapping("/products/{cat}")
    public ResponseEntity<List<Products>> getCatProducts(@PathVariable String cat) {
        List<Products> products = ProductServices.getProductsByCategory(cat);
        if (!products.isEmpty()) {
            return ResponseEntity.ok(products);
        } else {
            return ResponseEntity.notFound().build();
        }
    }



    @PostMapping("/product")
    public ResponseEntity<String> createProduct(@RequestBody  Products products)
    {
        return service.createProduct(products);
    }

    @DeleteMapping("/product/{id}")
    public ResponseEntity<String> deleteProductById(@PathVariable int id){
        return  service.deleteProductById(id);
    }



    @PutMapping("/product")
    public ResponseEntity<Products> updateProduct(@RequestBody Products products)
    {
        return  service.updateProduct(products);
    }

    //image  upload from frontend to backend
    //image uploaded as a file
    @PostMapping("/upload")
    public ResponseEntity<String> uploadImage(@RequestParam("image") MultipartFile file) throws IOException {
        return service.uploadImage(file);
    }

    //search
    @GetMapping("/search/{name}")
    public ResponseEntity<List<Products>> searchProduct(@PathVariable String name) {
        List<Products> products = ProductServices.searchProduct(name);
        if (!products.isEmpty()) {
            return ResponseEntity.ok(products);
        } else {
            return ResponseEntity.notFound().build();
        }
    }











}
